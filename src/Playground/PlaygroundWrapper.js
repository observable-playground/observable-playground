import React, { useEffect, useState } from 'react';
import { isClient } from '../shared/isServer';

let Playground;
let SSRPlayground;

export const PlaygroundWrapper = (props) => {
    const [_isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (isClient) {
            setIsClient(isClient);
        }
    }, [isClient]);

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