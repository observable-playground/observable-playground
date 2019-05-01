import React from 'react';

let Playground;
let SSRPlayground;

export const PlaygroundWrapper = (props) => {
    if (typeof document !== 'undefined') {
        if (!Playground){
            Playground = require('./Playground').Playground;
        }
        return <Playground { ...props } />
    } else {
        SSRPlayground = require('./SSRPlayground').SSRPlayground;
        return <SSRPlayground { ...props } />
    }
}