import React, { useEffect, useState } from 'react';
import { isClient } from '../shared/isServer';

let Playground;
let SSRPlayground;

export const PlaygroundWrapper = (props) => {
    const [_isClient, setIsClient] = useState(false);

    let __isClient = isClient();

    // TODO: should differ only in dev mode
    useEffect(() => {
        if (__isClient) {
            setIsClient(__isClient);
        }
    }, [__isClient]);

    if (_isClient) {
        if (!Playground) {
            Playground = require('./Playground').Playground;
        }
        return <Playground {...props} />
    } else {
        if (!SSRPlayground) {
            SSRPlayground = require('./SSRPlayground').SSRPlayground;
        }
        return <SSRPlayground {...props} />
    }
}