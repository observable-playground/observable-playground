import React from 'react';
import './SSRPlayground.css';

export const SSRPlayground = (props) => {
    return <div className="Playground">
        <div className="Playground__editor"><pre className="SSRPlayground__Pre"><code>{ props.code }</code></pre></div>
        <div className="Playground__chart"></div>
    </div>;
}