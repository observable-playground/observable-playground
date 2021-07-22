import React from 'react';
import { palette } from '../../../shared/consts';
import { printValue } from './printValue';
import { EVENT_DIAMETER_WITH_MARGIN, EVENT_RADIUS } from "./const";

export function Events(props) {
    let { events, xScale } = props;

    return <>{
        events.flatMap(([time, entries]) => {
            return entries.map((d, columnIndex) => <g
                key={d.index}
                className={`event${time} event`}
                transform={`translate(${xScale(d.time)}, ${(columnIndex - (entries.length - 1) / 2) * EVENT_DIAMETER_WITH_MARGIN})`}
            >
                <circle
                    r={EVENT_RADIUS}
                    style={{ fill: (d.value && d.value.color) ? d.value.color : palette[d.index % palette.length] }} />
                <text
                    fontFamily="sans-serif"
                    fontSize="14px"
                    textAnchor="middle"
                    strokeWidth="0"
                    y="5"
                >
                    {printValue(d.value)}
                </text>
                <title>{printValue(d.value)} </title>
            </g>
            );
        })
    }</>;
}
