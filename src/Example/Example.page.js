import React from 'react';
import { ExampleComponent } from './Example.component';
import Head from 'next/head';

export function ExamplePage({ library, example }) {
    return <>
        <Head>
            <title>{example.pageTitle || `${library.name} ${example.name} example and playground`}</title>
            <meta name="description" content={example.desc || `Test and explore ${library.name} \"${example.name}\" behavior and other reactive programming code examples in this marble visualisation playground`} />
        </Head>

        <ExampleComponent key="ExampleComponent" example={example} />
    </>
}