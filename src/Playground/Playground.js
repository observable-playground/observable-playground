import React, { useMemo, useCallback, useEffect, useState } from 'react';
import { EditorComponent } from './components/Editor/Editor';
import { ErrorComponent } from './components/Error/ErrorComponent';
import { TimeLineChartComponent } from './components/TimeLineChart/TimeLineChartComponent';
import style from './Playground.module.scss';
import { run } from '../core/runner';
import { WarningComponent } from './components/Warning/WarningComponent';
import { isClient } from '../shared/isServer';

export function Playground (props) {
    const [code, setCode] = useState(props.code);

    const { status, time, lines } = useMemo(() => run(code), [code]);

    if (isClient()) {
        useEffect(() => setCode(props.code), [props.code]);
    }

    const onChange = useCallback(code => {
        if (window && window.ga) {
            // NOTE: couldn't achieve this with autotrack
            // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
            window.ga('send', 'event', 'Editor', 'change');
        }

        setCode(code);
    }, [])

    return (
        <div className={style.Playground}>
            <div className={style.Playground__editor}>
                <EditorComponent
                    value={ code }
                    defaultValue={ props.code }
                    onChange={ onChange }
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