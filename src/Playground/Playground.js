import React, { Component } from 'react';
import { EditorComponent } from './components/Editor/EditorComponent';
import { ErrorComponent } from './components/Error/ErrorComponent';
import { TimeLineChartComponent } from './components/TimeLineChart/TimeLineChartComponent';
import style from './Playground.module.scss';
import { run } from '../core/runner';
import { WarningComponent } from './components/Warning/WarningComponent';

export class Playground extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);

        const code = props.code;
        const { status, time, lines } = run(code);
        this.state = {
            value: code,
            defaultValue: code,
            status,
            time,
            lines
        };
    }

    componentWillReceiveProps({ code }){
        this.onChange(code);
    }

    onChange(sourceCode){
        if (sourceCode == this.state.value) {
            return;
        }

        if (window && window.ga) {
            // NOTE: couldn't achieve this with autotrack
            // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
            window.ga('send', 'event', 'Editor', 'change');
        }

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
        return (
            <div className={style.Playground}>
                <div className={style.Playground__editor}>
                    <EditorComponent
                        value={ value }
                        defaultValue={ defaultValue }
                        onChange={ this.onChange }
                    ></EditorComponent>
                </div>
                <div className={style.Playground__chart}>
                    {
                        status.isError &&
                            <ErrorComponent error={ status.error }></ErrorComponent>
                    }
                    {
                        status.isWarning &&
                            <WarningComponent warning={ status.warning }></WarningComponent>
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