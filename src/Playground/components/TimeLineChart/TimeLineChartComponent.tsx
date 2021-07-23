import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { MAX_EXECUTION_TIME } from '../../../shared/consts';
import { isClient } from '../../../shared/isServer';
import { Chart } from './Chart';
import { TIMELINE_HEIGHT, MIN_MS_TO_DISPLAY, LINE_HEADER_HEIGHT, EVENT_DIAMETER_WITH_MARGIN, EVENT_DIAMETER, MARK_HEIGHT, LINE_MARGIN_BOTTOM } from './const';
import { printValue } from './printValue';
import style from './TimeLineChartComponent.module.scss';

const SSR_WIDTH = 400;

function downloadAsSvg(svg) {
    import('save-svg-as-png').then(({ saveSvgAsPng }) => {
        const filename = window.document.title.replace(/[^a-z0-9]/gi, '-').toLowerCase();
        saveSvgAsPng(svg, filename, {
            encoderOptions: 1,  // high image quality
            scale: 2            // upscale for better quality in publicaions
        });
    })
}


export function TimeLineChartComponent(props) {
    let { time, lines } = props;

    let placeholder = useRef(null);
    let svg = useRef(null);

    // download svg
    let _downloadAsSvg = useCallback(() => {
        downloadAsSvg(svg.current);
    }, [svg.current]);

    // update width on first render and on resize
    let [width, setWidth] = useState(SSR_WIDTH);
    if (isClient()) {
        useLayoutEffect(() => {
            if (!placeholder.current) return;

            let update = () => setWidth(placeholder.current.clientWidth);
            update();

            window.addEventListener('resize', update);
            return () => window.removeEventListener('resize', update);
        }, [placeholder.current]);
    }

    // calculate lines data with heights and offsets 
    let chartData = useMemo(() => {
        const initial = {
            height: TIMELINE_HEIGHT,
            time: Math.max(time, MIN_MS_TO_DISPLAY),
            lines: []
        };

        // early bail out probably due to an error in compilation
        if (!lines?.length) {
            return initial;
        }

        return lines.reduce((acc, curr) => {
            const start = curr.start;
            const end = curr.end ?? MAX_EXECUTION_TIME; // TOOD: mark line as exhausting the chart, instead of drawing it to infinity
            const events = curr.events;
            const errors = curr.errors;
            const stops = curr.stops;
            const lineName = curr.lineName != null ? printValue(curr.lineName) : '';

            const lineTitleHeight = lineName ? LINE_HEADER_HEIGHT : 0;
            let maxEventsAtOneTime = curr.height;
            const eventsHeight = Math.max((maxEventsAtOneTime - 1) * EVENT_DIAMETER_WITH_MARGIN + EVENT_DIAMETER, MARK_HEIGHT);
            const heightWithTitle = lineTitleHeight + eventsHeight;

            const offset = acc.height;

            acc.lines.push({ start, end, events, errors, stops, lineName, lineTitleHeight, eventsHeight, offset })

            const lineHeight = heightWithTitle + LINE_MARGIN_BOTTOM;
            acc.height += lineHeight;

            return acc;
        }, initial)

    }, [lines])

    return <div className={style.Placeholder} ref={placeholder} style={{height: chartData.height}}>
        <Chart width={width} chartData={ chartData } svgRef={svg}/>
        <button
            className={style.Download}
            onClick={_downloadAsSvg}
            title="Download as .png"
        ><span className={style.DownloadHint}>Download as PNG </span><FontAwesomeIcon icon={faDownload} fixedWidth style={{ width: '1rem' }} /></button>
    </div>
}

