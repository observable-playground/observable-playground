import React, { useLayoutEffect, useState } from 'react';
import { isServer } from '../shared/isServer';

let Playground;
let SSRPlayground;

export const PlaygroundWrapper = (props) => {
    const [_isServer, setIsServer] = useState(isServer);

    useLayoutEffect(() => {
        setIsServer(isServer);
    }, []);

    if (_isServer) {
        if (!SSRPlayground) {
            SSRPlayground = require('./SSRPlayground').SSRPlayground;
        }
        return <SSRPlayground { ...props } />
    } else {
        if (!Playground){
            Playground = require('./Playground').Playground;
        }
        return <Playground { ...props } />
    }
}