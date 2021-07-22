import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Playground } from '../../Playground/Playground';
import { createGenericDescription } from '../../shared/consts';
import { ExternalLink } from '../../shared/ExternalLink';
import basicExample from './basic.example';

export default () =>
<React.Fragment>
    <Head>
        <title>Kefir.js playground and examples</title>
        <meta name="description" content={createGenericDescription('Kefir.js')} />
    </Head>

    <div key="Kefir">
        <div className="PageBlock">
            <h1>Kefir.js Playground</h1>

            <blockquote>
                <p>Kefir — is a Reactive Programming library for JavaScript inspired by Bacon.js and RxJS, with focus on high performance and low memory usage.</p>
            </blockquote>
        </div>

        <br />
        <Playground code={ basicExample } />
        <br />


        <div className="PageBlock">
            <p>
                If you are looking for a place to start — take a look at the <Link href="/[libId]/[fileId]/" as="/kefir/interval/"><a><b>interval</b></a></Link> example.
            </p>
        </div>

        <div className="PageBlock">
            <h2>⚙️ API notes</h2>
            <p>
                To visualize the observables we developed a small API. Provided <code>api/v0.3</code> package has a function <code>kefirObserver(title: string): observer</code>, that you can call to create a <ExternalLink href="https://kefirjs.github.io/kefir/#observe">kefir observer</ExternalLink>, which will display its state on the time chart in the right part of the screen.
            </p>
        </div>

        <div className="PageBlock">
            <h2>🔗 External links</h2>
            <ul>
                <li><b><ExternalLink href="https://github.com/kefirjs/kefir">kefirjs/kefir</ExternalLink></b> — Kefir repo</li>
                <li><b><ExternalLink href="https://kefirjs.github.io/kefir/">kefirjs.github.io/kefir</ExternalLink></b> — official docs</li>

            </ul>
        </div>
    </div>
</React.Fragment>