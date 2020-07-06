import React from 'react'
import { PlaygroundWrapper } from '../../Playground/PlaygroundWrapper';
import Head from 'next/head';
import Link from 'next/link';
import basicExample from './basic.example';
import { ExternalLink } from '../../shared/ExternalLink';
import { timer } from 'rxjs';

export default () =>
<>
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
                If you're only starting to explore RxJS — we'd advise you to start with Creation section examples, like <b><Link href="/[libId]/[fileId]/" as="/rxjs/timer/">timer</Link></b> or <b><Link href="/[libId]/[fileId]/" as="/rxjs/fromPromise/">fromPromise</Link></b>.
            </p>

            <p>
                If you want to get familiar with pipeable operators — head right to the <b><Link href="/[libId]/[fileId]/" as="/rxjs/pipe/">pipe</Link></b> operator and experiment with it. Be sure to check <ExternalLink href="https://rxjs.dev/guide/v6/pipeable-operators">pipeable operators</ExternalLink> official page as well.
            </p>
        </div>

        <div className="PageBlock">
            <h2>My articles</h2>

            <p>
                <b><ExternalLink href="https://medium.com/@kddsky/error-handling-in-rxjs-bac0f96a7def">"Error handling in RxJS"</ExternalLink></b>
                <br/>
                <span>Learn how to deal with errors and retry failed requests</span>
            </p>

            <p>
                <b><ExternalLink href="https://medium.com/@kddsky/pauseable-observables-in-rxjs-58ce2b8c7dfd">"Pausable Observables in RxJS"</ExternalLink></b>
                <br/>
                <span>Create a push back force in your streams</span>
            </p>

            <p>
                <b><ExternalLink href="https://dev.to/kosich/recks-rxjs-based-framework-23h5">"Rx+JSX experiment: Recks 🐶"</ExternalLink></b>
                <br/>
                <span><code>{'<div>{ timer(0, 100) }</div>'}</code> — Observables inside JSX</span>
            </p>

            <p>
                <b><ExternalLink href="https://dev.to/kosich/regexp-for-reactive-streams-143g">"RegExp syntax for Observables: Never Been Easier!"</ExternalLink></b>
                <br/>
                <span>Use regexp-like syntax to query observables. EXPERIMENT</span>
            </p>

            <p>
                <b><ExternalLink href="https://dev.to/rxjs/debounce-vs-throttle-vs-audit-vs-sample-difference-you-should-know-1f21">"RxJS debounce vs throttle vs audit vs sample"</ExternalLink></b>
                <br/>
                <span>Difference You Should Know</span>
            </p>

        </div>

        <div className="PageBlock">
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
</>
