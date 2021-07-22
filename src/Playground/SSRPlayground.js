import React, { useMemo } from 'react';
import { run } from '../core/runner';
import { TimeLineChartComponent } from './components/TimeLineChart/TimeLineChartComponent';
import style from './SSRPlayground.module.scss';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';

export function SSRPlayground(props) {
    let { code } = props;

    const { status, time, lines } = useMemo(() => run(code), [code]);

    return <div className={style.Playground}>
        <div className={style.Playground__editor}>
            <pre className={style.SSRPlayground__Pre}><code className={style.SSRPlayground__Code + ' SSRPlayground__Code'}>{code}</code></pre>
            <div className={style.SSRPlayground__Loader}>
                <LoadingIndicator />
            </div>
        </div>
        <div className={style.Playground__chart}>
            <TimeLineChartComponent
                time={time}
                lines={lines}
                ></TimeLineChartComponent>
        </div>
    </div>;
}