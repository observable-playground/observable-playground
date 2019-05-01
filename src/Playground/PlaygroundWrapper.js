import React from 'react';
import { SSRPlayground } from './SSRPlayground';

let Playground;

export const PlaygroundWrapper = (props) => {
    if (typeof document !== 'undefined') {
        if (!Playground){
            Playground = require('./Playground').Playground;
        }
        return <Playground { ...props } />
    } else {
        return <SSRPlayground { ...props } />
    }
}