import React, { useLayoutEffect, useRef } from 'react';
import { isClient } from '../../../shared/isServer';
import { COLOR_LIGHT_GREY } from "./const";

async function d3Axis(g: SVGGElement, xScale, width) {
    let { select, axisBottom } = await import('../../../lib/d3/out/axisBottom')

    // add x axis
    let axis = select(g)
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
}


export function Axis(props) {
let { xScale, width } = props;
let ref = useRef(null);

if (isClient()) {
    useLayoutEffect(() => {
        if (!ref.current) return;
        d3Axis(ref.current, xScale, width);

    }, [xScale, width]);
}

// NOTE: this is a stub axis for SSR
const MARGING = 38;
const RIGHT = width - MARGING;
return <g ref={ref} className="axis axis--x" transform="translate(0, 1)" fill="none" fontSize={10} fontFamily="sans-serif" textAnchor="middle">
        <path className="domain" stroke="#c5c5c5" d={`M0,6V0H${RIGHT}`} />
        <g className="tick" opacity={1} transform="translate(0,0)">
            <line stroke="#c5c5c5" y2={6} />
            <text fill="#c5c5c5" y={9} dy="0.71em">0ms</text>
        </g>
    </g>;
}