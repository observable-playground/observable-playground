import React from 'react';
import { printValue } from './printValue';
import { STROKE_WIDTH, EVENT_RADIUS, COLOR_ORANGE } from "./const";

export function Errors(props) {
    let { errors, xScale } = props;

    return <>
        {errors.map((d, index) => <g
            key={index}
            className="error"
            transform={`translate(${xScale(d.time)}, 0)`}
        >
            <title>{printValue(d.value)}</title>
            <line
                x1={-EVENT_RADIUS}
                y1={-EVENT_RADIUS}
                x2={+EVENT_RADIUS}
                y2={+EVENT_RADIUS} />

            <line
                x1={+EVENT_RADIUS}
                y1={-EVENT_RADIUS}
                x2={-EVENT_RADIUS}
                y2={+EVENT_RADIUS} />

            <path
                // triangle generated via `npm d3-shape`:
                // d3.symbol().type(d3.symbolTriangle).size(250);
                d="M0,-13.872638167626057L12.01405707067377,6.936319083813029L-12.01405707067377,6.936319083813029Z"
                className="errorTriangle"
                stroke={COLOR_ORANGE}
                fill={COLOR_ORANGE}
                strokeLinejoin="round"
                strokeWidth={STROKE_WIDTH * 2} />

            <text
                fontFamily="monospace"
                textAnchor="middle"
                strokeWidth="0"
                y="4"
            >!</text>
        </g>
        )}
    </>;

}
