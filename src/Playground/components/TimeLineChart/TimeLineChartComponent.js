import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { axisBottom, scaleLinear, select } from 'd3';
import groupBy from 'lodash/groupBy';
import React, { useCallback, useLayoutEffect, useRef } from 'react';
import { MAX_EXECUTION_TIME, palette } from '../../../shared/consts';
import { printValue } from './printValue';
import style from './TimeLineChartComponent.module.scss';

const EVENT_RADIUS = 17;
const EVENT_DIAMETER = EVENT_RADIUS * 2;
const TIMELINE_HEIGHT = 35;
const LINE_TITLE_HEIGHT = 12;
const LINE_TITLE_MARGIN_BOTTOM = 10;
const LINE_MARGIN_BOTTOM = 14;
const MARK_HALF_HEIGHT = 25;
const EVENT_MARGIN = -6;
const EVENT_DIAMETER_WITH_MARGIN = EVENT_DIAMETER + EVENT_MARGIN;
const MIN_MS_TO_DISPLAY = 10;
const MARGIN =
    { top: 0
    , right: EVENT_RADIUS + 2
    , bottom: 0
    , left: EVENT_RADIUS + 2
    };


// colors
const STROKE_WIDTH = 2;
const COLOR_ORANGE = '#ff9900';
const COLOR_LIGHT_GREY = '#c5c5c5';
const COLOR_GREY = '#757575';
const COLOR_DARK_GREY = '#333';

function updateView(placeholder, svgNode, lines, time) {
    const width = placeholder.clientWidth - MARGIN.left - MARGIN.right;
    time = Math.max(time, MIN_MS_TO_DISPLAY);

    // cleanup before going further
    select(svgNode)
        .selectAll('g.root')
        .remove();

    const svg = select(svgNode);

    const rootg = svg
        .append('g')
        .attr('class', 'root')
        .attr('transform', `translate( ${MARGIN.left}, ${MARGIN.top})`);

    const xScale = scaleLinear()
        .domain([0, time])
        .range([0, width])
        .nice();

    // add x axis
    const axis = rootg
        .append('g')
        .attr('class', 'axis axis--x')
        .call(
            axisBottom(xScale)
                .tickFormat(x => x + 'ms')
                .ticks(
                    // for mobile/narrow screen
                    // cut ticks count to 7
                    width < 500
                        ? 7
                        : undefined
                )
        );

    axis
        .selectAll('line, path')
        .attr('stroke', COLOR_LIGHT_GREY);

    axis
        .selectAll('text')
        .attr('fill', COLOR_LIGHT_GREY);

    const graph = rootg
        .append('g')
        .attr('transform', `translate(0, ${TIMELINE_HEIGHT})`);

    if (!lines) {
        return;
    }

    let accHeight = 0;

    lines.forEach(line => {
        const start = line.start;
        // TOOD: mark line as exhausting the chart, instead of drawing it to infinity
        const end = line.end === undefined ? MAX_EXECUTION_TIME : line.end;
        const events = groupBy(line.events || [], event => event.time);
        const errors = line.errors || [];
        const stops = line.stops || [];
        const lineName = line.lineName != null ? printValue(line.lineName) : '';

        // TODO: scale vert
        const y = accHeight;

        const lineTitleHeight = lineName ? LINE_TITLE_HEIGHT + LINE_TITLE_MARGIN_BOTTOM : 0;
        const maxEventsAtOneTime = Object.values(events).reduce((acc, curr) => Math.max(curr.length, acc), 1);
        const eventsHeight = Math.max((maxEventsAtOneTime - 1) * EVENT_DIAMETER_WITH_MARGIN + EVENT_DIAMETER, MARK_HALF_HEIGHT * 2);
        const lineHeight = lineTitleHeight + eventsHeight;

        accHeight += lineHeight + LINE_MARGIN_BOTTOM;

        const threadg = graph
            .append('g')
            .attr('class', 'thread')
            .attr('transform', () => `translate(0, ${y})`)

        // Line title
        if (lineName) {
            threadg
                .append('text')
                .attr('class', 'lineTitle')
                .attr('font-family', 'sans-serif')
                .attr('font-size', LINE_TITLE_HEIGHT)
                .attr('fill', COLOR_GREY)
                .attr('y', LINE_TITLE_HEIGHT)
                .text(lineName);
        }

        const linefg = threadg
            .append('g')
            .attr('class', 'line')
            .attr('transform', () => `translate(0, ${lineTitleHeight})`)
            .attr('stroke', COLOR_DARK_GREY)
            .attr('stroke-width', STROKE_WIDTH);

        const lineg = linefg
            .append('g')
            .attr('transform', () => `translate(0, ${eventsHeight / 2})`);

        // Baseline
        lineg
            .append('line')
            .attr('class', 'baseline')
            .attr('x1', () => xScale(start))
            .attr('y1', 0)
            .attr('x2', () => xScale(end))
            .attr('y2', 0);

        // Start mark
        lineg
            .append('line')
            .attr('class', 'startmark')
            .attr('x1', () => xScale(start))
            .attr('y1', -MARK_HALF_HEIGHT)
            .attr('x2', () => xScale(start))
            .attr('y2', 0)
            .append('title')
            .text('start');

        // End marks
        lineg
            .selectAll('g.end')
            .data(stops)
            .enter()
            .append('g')
            .attr('class', 'end')
            .attr('transform', d => `translate(${xScale(d.time)}, 0)`)

            .append('line')
            .attr('class', 'endmark')
            .attr('x1', 0)
            .attr('y1', -MARK_HALF_HEIGHT)
            .attr('x2', 0)
            .attr('y2', +MARK_HALF_HEIGHT)

            .append('title')
            .text('complete');

        // Events {{{
        Object.entries(events)
            .forEach((entry) => {
                const currentEvents = entry[1];
                // TODO: use scaleLinear

                const eventMarks = lineg
                    .selectAll(`g.event${entry[0]}`)
                    .data(currentEvents)
                    .enter()
                    .append('g')
                    .attr('class', `event${entry[0]} event`)
                    .attr('transform',
                        (d, index) => `translate(${xScale(d.time)}, ${(index - (currentEvents.length - 1) / 2) * EVENT_DIAMETER_WITH_MARGIN})`);

                eventMarks
                    .append('circle')
                    .attr('r', EVENT_RADIUS)
                    .style('fill', d => {
                        if (d.value && d.value.color) {
                            return d.value.color;
                        }

                        return palette[d.index % palette.length]
                    });

                eventMarks
                    .append('text')
                    .attr('font-family', 'sans-serif')
                    .attr('font-size', '14px')
                    .attr('text-anchor', 'middle')
                    .attr('stroke-width', 0)
                    .attr('y', 5)
                    .text(d => printValue(d.value));

                eventMarks
                    .append('title')
                    .text(d => printValue(d.value));
            });
        // }}}

        const errorMarks = lineg
            .selectAll('g.error')
            .data(errors)
            .enter()
            .append('g')
            .attr('class', 'error')
            .attr('transform', d => `translate(${xScale(d.time)}, 0)`)

        // error mark = cross with an exclamation mark in a triangle in it
        errorMarks
            .append('title')
            .text(d => printValue(d.value));

        errorMarks
            .append('line')
            .attr('x1', -EVENT_RADIUS)
            .attr('y1', -EVENT_RADIUS)
            .attr('x2', +EVENT_RADIUS)
            .attr('y2', +EVENT_RADIUS);

        errorMarks
            .append('line')
            .attr('x1', +EVENT_RADIUS)
            .attr('y1', -EVENT_RADIUS)
            .attr('x2', -EVENT_RADIUS)
            .attr('y2', +EVENT_RADIUS);

        errorMarks
            .append('path')
            // triangle generated via `npm d3-shape`:
            // d3.symbol().type(d3.symbolTriangle).size(250);
            .attr('d', 'M0,-13.872638167626057L12.01405707067377,6.936319083813029L-12.01405707067377,6.936319083813029Z')
            .attr('class', 'errorTriangle')
            .attr('stroke', COLOR_ORANGE)
            .attr('fill', COLOR_ORANGE)
            .attr('stroke-linejoin', 'round')
            .attr('stroke-width', STROKE_WIDTH * 2)

        errorMarks
            .append('text')
            .attr('font-family', 'monospace')
            .attr('text-anchor', 'middle')
            .attr('stroke-width', 0)
            .attr('y', 4)
            .text('!');
    });

    let chartHeight = accHeight + TIMELINE_HEIGHT + MARGIN.top + MARGIN.bottom;
    let chartWidth = width + MARGIN.left + MARGIN.right;
    svg
        .attr('width', chartWidth)
        .attr('height', chartHeight)

    // updating placeholder to reflect svg size footprint
    placeholder.style.height = chartHeight + 'px';
}

function downloadAsSvg(svg) {
    import('save-svg-as-png').then(({ saveSvgAsPng }) => {
        const filename = window.document.title.replace(/[^a-z0-9]/gi, '-').toLowerCase();
        saveSvgAsPng(svg, filename, {
            encoderOptions: 1,  // high image quality
            scale: 2            // upscale for better quality in publicaions
        });
    })
}


///
export function TimeLineChartComponent(props) {
    let placeholder = useRef(null);
    let svg = useRef(null);

    let { time, lines } = props;

    useLayoutEffect(() => {
        if (!placeholder.current || !svg.current) return;

        let rerender = () => updateView(placeholder.current, svg.current, lines, time);
        rerender();

        window.addEventListener('resize', rerender);
        return () => window.removeEventListener('resize', rerender);
    }, [placeholder.current, svg.current, lines, time]);

    let _downloadAsSvg = useCallback(() => {
        downloadAsSvg(svg.current);
    }, [svg.current]);


    return <div className={style.Placeholder} ref={placeholder}>
        <div className={style.TimeLineChart}>
            <svg
                ref={svg}
                width="0"
                height="0"
            ></svg>
        </div>

        <button
            className={style.Download}
            onClick={_downloadAsSvg}
            title="Download as .png"
        ><span className={style.DownloadHint}>Download as SVG </span><FontAwesomeIcon icon={faDownload} /></button>
    </div>
}