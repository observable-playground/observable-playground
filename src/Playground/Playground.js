import React, { Component } from 'react';
import './Playground.css';
import { execute } from '../mock-delayed-execution';
import { EditorComponent } from './components/Editor/Editor';
import * as Rx from 'rxjs/Rx';
import { ErrorComponent } from './components/Error/ErrorComponent';
import { TimeLineChartComponent } from './components/TimeLineChart/TimeLineChartComponent';
import { createApi } from './chart-api';

const MAX_EXECUTION_TIME = 1000; // 1 sec is max execution time for scripts

export class Playground extends Component {
    constructor(props){
        super(props);

        const code = props.code;

        const { status, time, lines } = this.executeScript(code);
        this.state = {
            value: '',
            defaultValue: code,
            status,
            time,
            lines
        };

        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const code = nextProps.code;
        const { status, time, lines } = this.executeScript(code);
        this.setState({
            value: code,
            defaultValue: code,
            status,
            time,
            lines
        });
    }

    executeScript(sourceCode){
        let status, time, lines;
        const { state, chart } = createApi();
        try {
            let result = execute(() => {
                // eslint-disable-next-line no-new-func
                const fn = Function('require', 'chart', sourceCode);

                fn(() => Rx, chart);
            }, MAX_EXECUTION_TIME);

            status = result.status;
            time = result.time;
        } catch (err) {
            console.error(err);
            status = err;
            time = 0;
        } finally {
            lines = state.lines || [];
        }

        return { time, lines, status };
    }

    onChange(sourceCode){
        const { status, time, lines } = this.executeScript(sourceCode);

        this.setState({
            value: sourceCode,
            status,
            time,
            lines,
        });
    }

    render() {
        const { status, time, lines, value, defaultValue } = this.state;
        const showError = status instanceof Error;
        return (
            <div className="Playground row">
                <div className="col-md-5">
                    <EditorComponent
                        value={ value }
                        defaultValue={ defaultValue }
                        onChange={ this.onChange }
                    ></EditorComponent>
                </div>
                <div className="col-md-7">
                    {
                        showError
                        && (<ErrorComponent error={ status }></ErrorComponent>)
                    }
                    {
                        !showError
                        && (
                        <div className="Playground__chart">
                            <TimeLineChartComponent time={time} lines={lines} ></TimeLineChartComponent>
                        </div>)
                    }
                </div>
            </div>
        );
    }
}