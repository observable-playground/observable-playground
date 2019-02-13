import React from 'react';

export const PlaygroundWrapper = (props) => {
    if (typeof document !== 'undefined') {
        const { Playground } = require('./Playground');
        return <Playground { ...props } />
    } else {
        return <code>{ props.code }</code>;
    }
}