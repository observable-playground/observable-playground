import React, { useMemo } from 'react';
import Prism from 'prismjs';
import { LoadingIndicator } from '../../../shared/LoadingIndicator/LoadingIndicator';
// import 'prismjs/themes/prism-solarizedlight.css'
// import 'prismjs/themes/prism-dark.css'
// import 'prismjs/themes/prism.css'
// import 'prismjs/themes/prism-coy.css'
import 'prismjs/themes/prism-okaidia.css'
import style from './SSREditor.module.scss';

export function SSREditor(props: { value: string }){
    const { value } = props;

    let output = Prism.highlight(value, Prism.languages.javascript, 'javascript')

    let length = value.split(/\n/).length;
    let numbers = new Array(length).fill(0).map((_, i) => {
        return <div key={i}>{i + 1}</div>
    })


    return <div className={style.Editor}>
        <div className={style.Gutter}>
            {numbers}
        </div>
        <pre className="language-js"><code className="language-js" dangerouslySetInnerHTML={{ __html: output }} /></pre>

        <div className={style.LoadingIndicator}>
            <LoadingIndicator />
        </div>
    </div>
}