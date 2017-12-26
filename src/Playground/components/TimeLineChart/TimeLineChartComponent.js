import React, { Component } from 'react';
import * as d3 from 'd3';
import './TimeLineChartComponent.css';

const VIEW_WIDTH = 580;  // TODO: read actual width
const VIEW_HEIGHT = 500; // TODO: read actual height

const colorPallete = ["#03a9f4", "#ffeb3b", "#8bc34a", "#00bcd4", "#ff9800", "#ff5073", "#4caf50", "#2196f3", "#33cf89", "#4e86ff", "#009688", "#cddc39", "#ffc107"]


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
        const { time, lines } = this.props;
        const node = this.node;

        const EVENT_CIRCLE_RADIUS = 17;

        const margin =
            { top:    18
            , right:  EVENT_CIRCLE_RADIUS + 2
            , bottom: EVENT_CIRCLE_RADIUS + 2
            , left:   EVENT_CIRCLE_RADIUS + 2
            };

        const width  = VIEW_WIDTH  - margin.left - margin.right;
        const height = VIEW_HEIGHT - margin.top - margin.bottom;

        // cleanup before going further
        d3
            .select(node)
            .selectAll('g')
            .remove();

        const svg = d3
            .select(node)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate( ${ margin.left }, ${ margin.top })`);

        const xScale = d3.scaleLinear()
            .domain([0, time])
            .range([0, width])

        // add x axis
        svg
            .append('g')
            .attr('class', 'axis axis--x')
            .call(d3.axisTop(xScale));
        
        const graph = svg
            .append('g')
            .attr('transform', `translate(0, 60)`);

        lines.forEach((line, index)=>{
            const start = line.start;
            const end = line.end || Number.MAX_SAFE_INTEGER;
            const events = line.events;

            const lineg = graph
                .append('g')
                .attr('class', 'thread');

            const y = index * 60;

            // Baseline
            lineg
                .append('line')
                .attr('class', 'baseline')
                .attr('x1', ()=>xScale(start))
                .attr('y1', y)
                .attr('x2', ()=>xScale(end))
                .attr('y2', y);

            // Start mark
            lineg
                .append('line')
                .attr('class', 'startmark')
                .attr('x1', ()=>xScale(start))
                .attr('y1', y - 25)
                .attr('x2', ()=>xScale(start))
                .attr('y2', y);

            // End mark
            lineg
                .append('line')
                .attr('class', 'endmark')
                .attr('x1', ()=>xScale(end))
                .attr('y1', y - 25 )
                .attr('x2', ()=>xScale(end))
                .attr('y2', y + 25);

            // Events
            const eventsMarks = lineg
                .selectAll('g.event')
                .data(events)
                .enter()
                .append('g')
                .attr('class', 'event')
                .attr('transform', d => `translate( ${ xScale(d.time) }, ${ y })`);

            eventsMarks
                .append('circle')
                .attr('r', EVENT_CIRCLE_RADIUS) // TODO: scale vert
                .style('fill', (d, index)=>{
                    return colorPallete[index % colorPallete.length];
                });

            eventsMarks
                .append('text')
                .attr('text-anchor', 'middle')
                .attr('y', 5)
                .text(d => d.value);
        });
    }

    render() {
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