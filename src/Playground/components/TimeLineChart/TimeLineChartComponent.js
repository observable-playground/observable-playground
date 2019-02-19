import React, { Component } from 'react';
import * as d3 from 'd3';
import './TimeLineChartComponent.css';
import { palette } from '../../../shared/consts';
import { print } from './print';
import { groupBy, values, entries } from 'lodash';

const DEFAULT_VIEW_WIDTH = 460;  // TODO: read actual width
const DEFAULT_VIEW_HEIGHT = 500; // TODO: read actual height

export class TimeLineChartComponent extends Component {
    constructor(props) {
        super(props);
        this.createChart = this.createChart.bind(this);
    }

    componentDidMount() {
        this.createChart();
    }

    componentDidUpdate() {
        this.createChart();
    }

    createChart() {
        const node = this.node;

        const VIEW_HEIGHT = this.props.viewHeight || DEFAULT_VIEW_HEIGHT;
        const VIEW_WIDTH = DEFAULT_VIEW_WIDTH;

        const LINE_TITLE_HEIGHT = 12;

        // TODO: scale vert
        const EVENT_RADIUS = 17;
        const LINE_HEIGHT = EVENT_RADIUS * 2;
        const THREAD_HEIGHT = LINE_HEIGHT + LINE_TITLE_HEIGHT;

        const FIELD_PADDING = LINE_HEIGHT * 2;

        const MIN_MS_TO_DISPLAY = 10;

        const margin =
            { top:    0
            , right:  EVENT_RADIUS + 2
            , bottom: EVENT_RADIUS + 2
            , left:   EVENT_RADIUS * 1.5
            };

        const width  = VIEW_WIDTH  - margin.left - margin.right;
        const height = VIEW_HEIGHT - margin.top - margin.bottom;

        const lines = this.props.lines;
        const time = Math.max(this.props.time, MIN_MS_TO_DISPLAY);

        // cleanup before going further
        d3
            .select(node)
            .selectAll('g.root')
            .remove();

        const svg = d3
            .select(node)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('class', 'root')
            .attr('transform', `translate( ${ margin.left }, ${ margin.top })`);

        const xScale = d3.scaleLinear()
            .domain([0, time])
            .range([0, width])
            .nice();

        // add x axis
        svg
            .append('g')
            .attr('class', 'axis axis--x')
            .call(
                d3.axisBottom(xScale).tickFormat(x=>x + 'ms')
            );
        
        const graph = svg
            .append('g')
            .attr('transform', `translate(0, ${ FIELD_PADDING })`);

        if (!lines){
            return;
        }

        let accHeight = 0;
        lines.forEach((line, index)=>{
            const start = line.start;
            // TOOD: mark line as exhausting the chart, instead of drawing it to infinity
            const end = line.end === undefined ? Number.MAX_SAFE_INTEGER : line.end;
            const events = groupBy(line.events || [], event => event.time);
            const maxEvents = values(events).reduce((acc, curr) => Math.max(curr.length, acc), 1);
            const errors = line.errors || [];
            const stops  = line.stops  || [];
            const lineName = line.lineName;

            // TODO: scale vert
            const y = accHeight;

            accHeight += maxEvents * LINE_HEIGHT + LINE_TITLE_HEIGHT;

            const threadg = graph
                .append('g')
                .attr('class', 'thread')
                .attr('transform', () => `translate( 0, ${ y })`)

            // Line title
            threadg
                .append('text')
                .attr('class', 'lineTitle')
                .attr('font-size', LINE_TITLE_HEIGHT)
                .text(lineName);

            const lineg = threadg
                .append('g')
                .attr('class', 'thread')
                .attr('transform', () => `translate( 0, ${ LINE_TITLE_HEIGHT + LINE_HEIGHT / 2  })`)

            // Baseline
            lineg
                .append('line')
                .attr('class', 'baseline')
                .attr('x1', ()=>xScale(start))
                .attr('y1', 0)
                .attr('x2', ()=>xScale(end))
                .attr('y2', 0);

            // Start mark
            lineg
                .append('line')
                .attr('class', 'startmark')
                .attr('x1', ()=>xScale(start))
                .attr('y1', -25)
                .attr('x2', ()=>xScale(start))
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
                .attr('transform', d => `translate( ${ xScale(d.time) }, 0)`)

                .append('line')
                .attr('class', 'endmark')
                .attr('x1', 0)
                .attr('y1', -25 )
                .attr('x2', 0)
                .attr('y2', +25)

                .append('title')
                .text('end');

            // Events {{{
            entries(events)
                .sort((a, b) => a[0] - b[0])
                .forEach(entry => {
                    const currentEvents = entry[1];

                    const eventMarks = lineg
                        .selectAll('g.event' + entry[0])
                        .data(currentEvents)
                        .enter()
                        .append('g')
                        .attr('class', 'event' + + entry[0])
                        .attr('transform', (d, index) => `translate( ${ xScale(d.time) }, ${ index * LINE_HEIGHT })`);

                    eventMarks
                        .append('circle')
                        .attr('r', EVENT_RADIUS)
                        .style('fill', (d, index) => {
                            if (d.value && d.value.color) {
                                return d.value.color;
                            }

                            return palette[index % palette.length]
                        });

                    eventMarks
                        .append('text')
                        .attr('text-anchor', 'middle')
                        .attr('y', 5)
                        .text(d => print(d.value));

                    eventMarks
                        .append('title')
                        .text(d => print(d.value));
            });
            // }}}

            const errorMarks = lineg
                .selectAll('g.error')
                .data(errors)
                .enter()
                .append('g')
                .attr('class', 'error')
                .attr('transform', d => `translate( ${ xScale(d.time) }, 0)`);

            errorMarks
                .append('title')
                .text(d => print(d.value));

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
        });
    }

    render() {
        const VIEW_HEIGHT = this.props.viewHeight || DEFAULT_VIEW_HEIGHT;
        const VIEW_WIDTH = DEFAULT_VIEW_WIDTH;

        return (
            <svg
                className="TimeLineChartComponent"
                ref={ node => this.node = node }
                width={VIEW_WIDTH}
                height={VIEW_HEIGHT}>
            </svg>
        )
    }
}