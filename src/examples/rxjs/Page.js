import React from 'react'
import { PlaygroundWrapper } from '../../Playground/PlaygroundWrapper';
import Head from 'next/head';
import Link from 'next/link';
import basicExample from './basic.example';
import { ExternalLink } from '../../shared/ExternalLink';

export default () =>
<React.Fragment>
    <Head>
        <title>RxJS playground and examples</title>
    </Head>
    <div key="RxJS">
    <div className="PageBlock">
        <h1>RxJS Playground</h1>

        <blockquote>
            RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code
        </blockquote>

        <p>
            In this playground we added both <ExternalLink href="https://github.com/ReactiveX/rxjs">RxJS 6</ExternalLink> and a compatibility  <ExternalLink href="https://github.com/ReactiveX/rxjs/tree/master/compat">rxjs-compat</ExternalLink> package, that allows you to write code in RxJS 5 style.
            <br />
            You can use them via <code>require('rxjs')</code> and <code>require('rxjs/operators')</code> or just <code>require('rxjs/Rx')</code> for rxjs-compat version.
        </p>

        <p>
            To visualize the observables we developed a small API. Provided <code>api/v0.3</code> package has a function <code>rxObserver(title: string): Observer</code>, that you can call to create an <ExternalLink href="https://rxjs.dev/api/index/interface/Observer">Rx Observer</ExternalLink>, which will display its state on the time chart in the right part of the screen.
        </p>
    </div>

    <br />
    <PlaygroundWrapper code={ basicExample } />
    <br />

    <div className="PageBlock">
        <p>
            If you're only starting to explore RxJS — we'd advise you to start with Creation section examples, like <b><Link href="/rxjs/timer/">timer</Link></b> or <b><Link href="/rxjs/fromPromise/">fromPromise</Link></b>.
        </p>

        <p>
            If you want to get familiar with pipeable operators — head right to the <b><Link href="/rxjs/pipe/">pipe</Link></b> operator and experiment with it. Be sure to check <ExternalLink href="https://rxjs.dev/guide/v6/pipeable-operators">pipeable operators</ExternalLink> official page as well.
        </p>

        <div>
            <h2>External links</h2>
            <ul>
                <li><b><ExternalLink href="https://rxjs.dev/">rxjs.dev</ExternalLink></b> — official website for RxJS 6</li>
                <li><ExternalLink href="https://www.learnrxjs.io/">learnrxjs.io</ExternalLink> — clear examples, explanations, and resources for rxjs</li>
                <li><ExternalLink href="https://rxviz.com/">rxviz.com</ExternalLink> — animated playground for rx observables</li>
            </ul>
        </div>
    </div>
    </div>
</React.Fragment>
