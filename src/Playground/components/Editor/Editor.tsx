import React, { useState } from 'react';
import { isClient } from '../../../shared/isServer';

let Client;
let SSR;

export function EditorComponent(props) {
    if (isClient()) {
        if (!Client) Client = require('./ClientEditor').ClientEditor;
        return <Client {...props} />
    }

    if (!SSR) SSR = require('./SSREditor').SSREditor;
    return <SSR {...props} />
}