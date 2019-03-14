import React, { Component } from 'react';
import * as d3 from 'd3';
import groupBy from 'lodash/groupBy';
import values from 'lodash/values';
import entries from 'lodash/entries';
import { palette, MAX_EXECUTION_TIME } from '../../../shared/consts';
import { print } from './print';
import './TimeLineChartComponent.css';

const EVENT_RADIUS = 17;
const EVENT_DIAMETER = EVENT_RADIUS * 2;
const TIMELINE_HEIGHT = 35;
const LINE_TITLE_HEIGHT = 12;
const LINE_TITLE_MARGIN_BOTTOM = 10;
const LINE_MARGIN_BOTTOM = 14;
const MARK_HALF_HEIGHT = 25;
const EVENT_MARGIN = -6;
const EVENT_DIAMETER_WITH_MARGIN = EVENT_DIAMETER + EVENT_MARGIN;

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
        const wrapper = this.wrapper;

        const VIEW_WIDTH = wrapper.clientWidth;

        const MIN_MS_TO_DISPLAY = 10;

        const margin =
            { top:    0
            , right:  EVENT_RADIUS + 2
            , bottom: EVENT_RADIUS + 2
            , left:   EVENT_RADIUS * 1.5
            };

        const width  = VIEW_WIDTH - margin.left - margin.right;

        const lines = this.props.lines;
        const time = Math.max(this.props.time, MIN_MS_TO_DISPLAY);

        // cleanup before going further
        d3
            .select(node)
            .selectAll('g.root')
            .remove();

        const svg = d3
            .select(node);

        const rootSvg = svg
            .append('g')
            .attr('class', 'root')
            .attr('transform', `translate( ${ margin.left }, ${ margin.top })`);

        const xScale = d3.scaleLinear()
            .domain([0, time])
            .range([0, width])
            .nice();

        // add x axis
        rootSvg
            .append('g')
            .attr('class', 'axis axis--x')
            .call(
                d3.axisBottom(xScale).tickFormat(x=>x + 'ms')
            );

        const graph = rootSvg
            .append('g')
            .attr('transform', `translate(0, ${ TIMELINE_HEIGHT })`);

        if (!lines){
            return;
        }

        let accHeight = 0;

        lines.forEach(line=>{
            const start = line.start;
            // TOOD: mark line as exhausting the chart, instead of drawing it to infinity
            const end = line.end === undefined ? MAX_EXECUTION_TIME : line.end;
            const events = groupBy(line.events || [], event => event.time);
            const errors = line.errors || [];
            const stops  = line.stops  || [];
            const lineName = line.lineName != null ? print(line.lineName) : '';

            // TODO: scale vert
            const y = accHeight;

            const lineTitleHeight = lineName ? LINE_TITLE_HEIGHT + LINE_TITLE_MARGIN_BOTTOM : 0;
            const maxEventsAtOneTime = values(events).reduce((acc, curr) => Math.max(curr.length, acc), 1);
            const eventsHeight = Math.max((maxEventsAtOneTime - 1) * EVENT_DIAMETER_WITH_MARGIN + EVENT_DIAMETER, MARK_HALF_HEIGHT * 2);
            const lineHeight = lineTitleHeight + eventsHeight;

            accHeight += lineHeight + LINE_MARGIN_BOTTOM;

            const threadg = graph
                .append('g')
                .attr('class', 'thread')
                .attr('transform', () => `translate(0, ${ y })`)

            // Line title
            if (lineName){
                threadg
                    .append('text')
                    .attr('class', 'lineTitle')
                    .attr('font-size', LINE_TITLE_HEIGHT)
                    .attr('y', LINE_TITLE_HEIGHT)
                    .text(lineName);
            }

            const linefg = threadg
                .append('g')
                .attr('class', 'line')
                .attr('transform', () => `translate(0, ${ lineTitleHeight })`);

            const lineg = linefg
                .append('g')
                .attr('transform', () => `translate(0, ${ eventsHeight / 2 })`);

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
                .attr('y1', -MARK_HALF_HEIGHT)
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
                .attr('transform', d => `translate(${ xScale(d.time) }, 0)`)

                .append('line')
                .attr('class', 'endmark')
                .attr('x1', 0)
                .attr('y1', -MARK_HALF_HEIGHT)
                .attr('x2', 0)
                .attr('y2', +MARK_HALF_HEIGHT)

                .append('title')
                .text('complete');

            // Events {{{
            entries(events)
                .sort((a, b) => a[0] - b[0])
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
                            (d, index) => `translate(${ xScale(d.time) }, ${ (index - (currentEvents.length - 1) /2) * EVENT_DIAMETER_WITH_MARGIN })`);

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
                .attr('transform', d => `translate(${ xScale(d.time) }, 0)`);

            // error mark = cross with an exclamation mark in a triangle in it
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

            errorMarks
                .append('path')
                // triangle drawn by `npm d3-shape`:
                // d3.symbol().type(d3.symbolTriangle).size(250);
                .attr('d', 'M0,-13.872638167626057L12.01405707067377,6.936319083813029L-12.01405707067377,6.936319083813029Z')
                .attr('class', 'errorTriangle')

            errorMarks
                .append('text')
                .attr('text-anchor', 'middle')
                .attr('y', 4)
                .text('!');

            svg
                .attr('height', accHeight + TIMELINE_HEIGHT + margin.top + margin.bottom)
                .attr('width', width + margin.left + margin.right)
        });
    }

    render() {
        return (
            <div ref={wrapper => this.wrapper = wrapper}>
                <svg
                    className="TimeLineChartComponent"
                    ref={node => this.node = node}
                    width="0"
                    height="0"
                ></svg>
            </div>
        )
    }
}