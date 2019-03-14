import React, { Component } from 'react';
import { EditorComponent } from './components/Editor/EditorComponent';
import { ErrorComponent } from './components/Error/ErrorComponent';
import { TimeLineChartComponent } from './components/TimeLineChart/TimeLineChartComponent';
import './Playground.css';
import { run } from '../core/runner';

export class Playground extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: this.props.code,
            defaultValue: this.props.code,
            status: void 0,
            time: void 0,
            lines: void 0
        }
    }

    static getDerivedStateFromProps(props, state){
        const code = props.code;
        const { status, time, lines } = run(code);
        return {
            ...state,
            value: code,
            defaultValue: code,
            status,
            time,
            lines
        };
    }

    onChange(sourceCode){
        const { status, time, lines } = run(sourceCode);

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