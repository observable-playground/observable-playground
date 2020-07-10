import Head from 'next/head';
import React from 'react';
import { createGenericDescription } from '../shared/consts';
import { ExampleComponent } from './Example.component';

export function ExamplePage({ library, example }) {
    return <>
        <Head>
            <title>{example.pageTitle || `${library.name} ${example.name} example and playground`}</title>
            <meta name="description" content={example.desc || createGenericDescription(library.name, example.name)} />
        </Head>

        <ExampleComponent key="ExampleComponent" example={example} />
    </>
}