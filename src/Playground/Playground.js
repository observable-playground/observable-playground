import React, { Component } from 'react';
import './Playground.css';
import { execute } from '../mock-delayed-execution';
import { EditorComponent } from './components/Editor/EditorComponent';
import { ErrorComponent } from './components/Error/ErrorComponent';
import { TimeLineChartComponent } from './components/TimeLineChart/TimeLineChartComponent';
import { require } from './../playground-api/require';
import { chartState } from '../playground-api/chart-state';

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
        chartState.resetState();
        let execStatus, execTime;
        try {
            let result = execute(() => {
                // eslint-disable-next-line no-new-func
                const fn = Function('require', sourceCode);
                fn(require);
            }, MAX_EXECUTION_TIME);

            execStatus = result.status;
            execTime   = result.time;
        } catch (err) {
            console.error(err);
            execStatus = err;
            execTime = 0;
        }

        const { lines } = chartState.getState();

        return { time:   execTime
               , status: execStatus
               , lines
               };
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
            <div className="Playground">
                <div className="Playground__editor">
                    <EditorComponent
                        value={ value }
                        defaultValue={ defaultValue }
                        onChange={ this.onChange }
                    ></EditorComponent>
                </div>
                <div className="Playground__chart">
                    {
                        showError
                        && (<ErrorComponent error={ status }></ErrorComponent>)
                    }
                    {
                        !showError
                        && (<TimeLineChartComponent time={time} lines={lines} ></TimeLineChartComponent>)
                    }
                </div>
            </div>
        );
    }
}