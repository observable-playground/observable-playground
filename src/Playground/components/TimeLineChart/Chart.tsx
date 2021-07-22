import React, { useMemo } from 'react';
import style from './Chart.module.scss';
import { MARGIN } from "./const";
import { Axis } from './Axis';
import { Lines } from './Lines';

let { scaleLinear } = require('./lib/d3');

export function Chart(props) {
    let { svgRef, width, chartData: { time, height, lines } } = props;

    let xScale = useMemo(() => {
        const innerWidth = width - MARGIN.left - MARGIN.right;
        return scaleLinear()
            .domain([0, time])
            .range([0, innerWidth])
            .nice();
    }, [time, width]);

    return <div className={style.Chart}>
        <svg
            ref={svgRef}
            width={width}
            height={height}
        >
            <g
                className="root"
                transform={`translate( ${MARGIN.left}, ${MARGIN.top})`}
            >
                <Axis xScale={xScale} width={width} />
                <Lines xScale={xScale} lines={lines} time={time} />
            </g>
        </svg>
    </div>;
}
