import React from 'react';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import style from './SSRPlayground.module.scss';

export const SSRPlayground = (props) => {
    return <div className={style.Playground}>
        <div className={style.Playground__editor}><pre className={style.SSRPlayground__Pre}><code className={ style.SSRPlayground__Code + ' SSRPlayground__Code'}>{ props.code }</code></pre></div>
        <div className={style.Playground__chart}>
            <span className={style.SSRPlayground__Loader}>
                <LoadingIndicator />
            </span>
        </div>
    </div>;
}