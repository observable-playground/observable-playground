import Prism from 'prismjs';
import React from 'react';
import { LoadingIndicator } from '../../../shared/LoadingIndicator/LoadingIndicator';
import style from './SSREditor.module.scss';

// NOTE: the theme is loaded in the _app, as non-module styles are not allowed here

export function SSREditor(props: { value: string }){
    const { value } = props;

    let output = Prism.highlight(value, Prism.languages.javascript, 'javascript')

    let length = value.split(/\n/).length;
    let numbers = new Array(length).fill(0).map((_, i) => {
        return <div key={i}>{i + 1}</div>
    });

    let digits = length.toString().length;
    let gutterWidth = digits * 8 + (digits == 1 ? 1 : 0) /*padding*/ + 19 + 6;
    let codePadding = gutterWidth + 3;
    let codeHeight = length + 3 + 'rem';

    return <div className={style.Editor}>
        <div className={style.Gutter} style={{width: gutterWidth }}>
            {numbers}
        </div>

        <pre
            className="language-js"
            style={{ paddingLeft: codePadding, minHeight: codeHeight, margin: 0 }}
        >
            <code className="language-js" dangerouslySetInnerHTML={{ __html: output }} />
        </pre>

        <div className={style.LoadingIndicator}>
            <LoadingIndicator />
        </div>
    </div>
}