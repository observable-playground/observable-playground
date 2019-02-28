import React, { Component } from 'react';
import { execute } from './../core/mock-delayed-execution';
import * as chartState from '../core/playground-api/state';
import { EditorComponent } from './components/Editor/EditorComponent';
import { ErrorComponent } from './components/Error/ErrorComponent';
import { TimeLineChartComponent } from './components/TimeLineChart/TimeLineChartComponent';
import { MAX_EXECUTION_TIME } from '../shared/consts';
import { compile } from '../core/compiler';
import './Playground.css';

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
            const compiledFn = compile(sourceCode);
            let result = execute(compiledFn, MAX_EXECUTION_TIME);
            execStatus = result.status;
            execTime   = result.time;
        } catch (err) {
            console.error(err);
            if (err instanceof Error){
                execStatus = err;
            } else {
                execStatus = new Error(err);
            }

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
                        viewHeight={this.props.height}
                        defaultValue={ defaultValue }
                        onChange={ this.onChange }
                    ></EditorComponent>
                </div>
                <div className="Playground__chart">
                    {
                        showError && (
                            <React.Fragment>
                                <ErrorComponent error={ status }></ErrorComponent>
                                <br />
                            </React.Fragment>
                        )
                    }
                    <TimeLineChartComponent
                        time={time}
                        lines={lines}
                        ></TimeLineChartComponent>
                </div>
            </div>
        );
    }
}