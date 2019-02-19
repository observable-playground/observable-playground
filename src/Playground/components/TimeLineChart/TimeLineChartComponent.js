import React, { Component } from 'react';
import * as d3 from 'd3';
import './TimeLineChartComponent.css';
import { palette } from '../../../shared/consts';
import { print } from './print';

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

        // TODO: scale vert
        const EVENT_RADIUS = 17;
        const LINE_HEIGHT = EVENT_RADIUS * 2;

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

        lines.forEach((line, index)=>{
            const start = line.start;
            // TOOD: mark line as exhausting the chart, instead of drawing it to infinity
            const end = line.end === undefined ? Number.MAX_SAFE_INTEGER : line.end;
            const events = line.events || [];
            const errors = line.errors || [];
            const stops  = line.stops  || [];

            // TODO: scale vert
            const y = index * LINE_HEIGHT * 2;

            const lineg = graph
                .append('g')
                .attr('class', 'thread')
                .attr('transform', d => `translate( 0, ${ y })`)

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
                .attr('y2', 0);

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
                .attr('y2', +25);

            // Events {{{
            const eventMarks = lineg
                .selectAll('g.event')
                .data(events)
                .enter()
                .append('g')
                .attr('class', 'event')
                .attr('transform', d => `translate( ${ xScale(d.time) }, 0)`);

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
                .text(d => print(d.value))
                .attr('title', d => print(d.value));
            // }}}

            const errorMarks = lineg
                .selectAll('g.error')
                .data(errors)
                .enter()
                .append('g')
                .attr('class', 'error')
                .attr('transform', d => `translate( ${ xScale(d.time) }, 0)`);
            
            errorMarks
                .attr('title', d => print(d.value));

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