import React from 'react';
import { SSRPlayground } from './SSRPlayground';

export const PlaygroundWrapper = (props) => {
    if (typeof document !== 'undefined') {
        const { Playground } = require('./Playground');
        return <Playground { ...props } />
    } else {
        return <SSRPlayground { ...props } />
    }
}