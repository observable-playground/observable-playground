import React from 'react';
import { TITLE_FONT_SIZE, COLOR_GREY, COLOR_DARK_GREY, STROKE_WIDTH, MARK_HALF_HEIGHT, TITLE_LINE_HEIGHT } from "./const";
import { Events } from './Events';
import { Errors } from './Errors';

export function Lines(props) {
    let { xScale, lines } = props;

    return <>{
        lines.map((line, i) => {
            let { start, end, events, errors, stops, lineName, lineTitleHeight, eventsHeight, offset } = line;

            return <g key={i} className="thread" transform={`translate(0, ${offset})`}>
                {
                    // Line title
                    lineName &&
                    <text
                        className="lineTitle"
                        fontFamily="sans-serif"
                        fontSize={TITLE_FONT_SIZE}
                        fill={COLOR_GREY}
                        y={TITLE_FONT_SIZE}
                    >{lineName}</text>}

                {/* linefg */}
                <g
                    className="line"
                    transform={`translate(0, ${lineTitleHeight})`}
                    stroke={COLOR_DARK_GREY}
                    strokeWidth={STROKE_WIDTH}
                >
                    {/* lineg */}
                    <g transform={`translate(0, ${eventsHeight / 2})`}>
                        {/* line */}
                        <line
                            className="baseline"
                            x1={xScale(start)}
                            y1={0}
                            x2={xScale(end)}
                            y2={0} />

                        {/* start mark */}
                        <line
                            className="startmark"
                            x1={xScale(start)}
                            y1={-MARK_HALF_HEIGHT}
                            x2={xScale(start)}
                            y2={0}
                        ><title>start</title></line>

                        {stops.map((d, i) => <g
                            key={i}
                            className="end"
                            transform={`translate(${xScale(d.time)}, 0)`}
                        >

                            <line
                                className="endmark"
                                x1="0"
                                y1={-MARK_HALF_HEIGHT}
                                x2={0}
                                y2={+MARK_HALF_HEIGHT}
                            >
                                <title>complete</title>
                            </line>
                        </g>
                        )}

                        <Events xScale={xScale} events={events} />
                        <Errors xScale={xScale} errors={errors} />
                    </g>
                </g>
            </g>;
        })
    }
    </>;

}
