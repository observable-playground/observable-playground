import React from 'react';
import './SSRPlayground.css';

export const SSRPlayground = (props) => {
    return <div className="Playground">
        <div className="Playground__editor"><pre className="SSRPlayground__Pre"><code className="SSRPlayground__Code">{ props.code }</code></pre></div>
        <div className="Playground__chart">
            <div className="SSRPlayground__Loader">
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>;
}