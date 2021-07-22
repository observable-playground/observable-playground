import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Playground } from '../../Playground/Playground';
import { createGenericDescription } from '../../shared/consts';
import { ExternalLink } from '../../shared/ExternalLink';
import basicExample from './basic.example';
import apiExample from './api.example';

export default () =>
<>
    <Head>
        <title>RxJS playground and examples</title>
        <meta name="description" content={createGenericDescription('RxJS')} />
    </Head>

    <div key="RxJS">
        <div className="PageBlock">
            <h1>RxJS Playground</h1>

            <blockquote>
                <p>RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code</p>
            </blockquote>

            <br />
            <Playground code={ basicExample } />
            <br />

            <p>
                If you're just starting your RxJS journey — we'd advise you to start with these examples first:
            </p>

            <ul>
                <li>
                    <b><Link href="/[libId]/[fileId]/" as="/rxjs/timer/"><a>timer</a></Link></b> — starts emitting values after given timeout with set interval
                </li>
                <li>
                    <b><Link href="/[libId]/[fileId]/" as="/rxjs/map/"><a>map</a></Link></b> — apply a function to each value on the stream
                </li>
                <li>
                    <b><Link href="/[libId]/[fileId]/" as="/rxjs/filter/"><a>filter</a></Link></b> — filter only values matching predicate function
                </li>
                <li>
                    <b><Link href="/[libId]/[fileId]/" as="/rxjs/subscribe/"><a>subscribe</a></Link></b> — basically tells the Observable that we're ready to receive values
                </li>
            </ul>

            <p>
                If you are a seasoned Observer — do checkout these examples:
            </p>

            <ul>
                <li>
                    <b><Link href="/[libId]/[fileId]/" as="/rxjs/expand/"><a>expand</a></Link></b> — recursively turns each emission into another stream
                </li>
                <li>
                    <b><Link href="/[libId]/[fileId]/" as="/rxjs/share/"><a>share</a></Link></b> — share subscription among multiple observers
                </li>
                <li>
                    <b><Link href="/[libId]/[fileId]/" as="/rxjs/catch/"><a>catch</a></Link></b> — handle errors gracefully
                </li>
                <li>
                    <b><Link href="/[libId]/[fileId]/" as="/rxjs/dematerialize/"><a>dematerialize</a></Link></b> — pure magic
                </li>
            </ul>

            <p>
                Also, be sure to know these differences:
            </p>

            <ul>
                <li>
                    <Link href="/[libId]/[fileId]/" as="/rxjs/debounceTime-vs-throttleTime-vs-auditTime-vs-sampleTime/"><a><b>debounceTime</b> vs <b>throttleTime</b> vs <b>auditTime</b> vs <b>sampleTime</b></a></Link>
                </li>
                <li>
                    <Link href="/[libId]/[fileId]/" as="/rxjs/mergeMap-vs-exhaustMap-vs-switchMap-vs-concatMap/"><a><b>mergeMap</b> vs <b>exhaustMap</b> vs <b>switchMap</b> vs <b>concatMap</b></a></Link>
                </li>
                <li>
                    <Link href="/[libId]/[fileId]/" as="/rxjs/first-vs-take-vs-single/"><a><b>first</b> vs <b>take</b> vs <b>single</b></a></Link>
                </li>
                <li>
                    <Link href="/[libId]/[fileId]/" as="/rxjs/map-vs-pluck/"><a><b>map</b> vs <b>pluck</b></a></Link>
                </li>
            </ul>

            <p>
                And check out this experimental <Link href="/[libId]/[fileId]/" as="/rxjs/js-pipeline/"><a>pipeline <code>|&gt;</code> operator</a></Link> ⚠️
            </p>
        </div>

        <div className="PageBlock">
            <h2>📖 My articles</h2>

            <p>
                <b><ExternalLink href="https://medium.com/@kddsky/error-handling-in-rxjs-bac0f96a7def">"Error handling in RxJS"</ExternalLink></b> 😱 
                <br/>
                <span>Learn how to deal with errors and retry failed requests</span>
            </p>

            <p>
                <b><ExternalLink href="https://medium.com/@kddsky/pauseable-observables-in-rxjs-58ce2b8c7dfd">"Pausable Observables in RxJS"</ExternalLink></b> 🌊
                <br/>
                <span>Create a push back force in your streams</span>
            </p>

            <p>
                <b><ExternalLink href="https://dev.to/kosich/recks-rxjs-based-framework-23h5">"Rx+JSX experiment: Recks"</ExternalLink></b> 🐶
                <br/>
                <span><code>{'<div>{ timer(0, 100) }</div>'}</code> — Observables inside JSX</span>
            </p>

            <p>
                <b><ExternalLink href="https://dev.to/kosich/regexp-for-reactive-streams-143g">"RegExp syntax for Observables: Never Been Easier!"</ExternalLink></b> 📝
                <br/>
                <span>Use regexp-like syntax to query observables. EXPERIMENT</span>
            </p>

            <p>
                <b><ExternalLink href="https://dev.to/rxjs/debounce-vs-throttle-vs-audit-vs-sample-difference-you-should-know-1f21">"RxJS debounce vs throttle vs audit vs sample"</ExternalLink></b> 🤔
                <br/>
                <span>Difference You Should Know</span>
            </p>

        </div>

        <div className="PageBlock">
            <h2>⚙️ API notes</h2>

            <p>
                In this playground we added both <ExternalLink href="https://github.com/ReactiveX/rxjs">RxJS 6</ExternalLink> and a compatibility  <ExternalLink href="https://github.com/ReactiveX/rxjs/tree/master/compat">rxjs-compat</ExternalLink> package, that allows you to write code in RxJS 6 or in RxJS 5 style
                <br />
                You can use them via <code>require('rxjs')</code> and <code>require('rxjs/operators')</code> or just <code>require('rxjs/Rx')</code> for rxjs-compat version.
            </p>

            <p>
                To visualize observables we developed a small API:
                <br/>
                Provided <code>api/v0.3</code> package has a function <code>rxObserver(title?: string): Observer</code>, that creates an <ExternalLink href="https://rxjs.dev/api/index/interface/Observer">Rx Observer</ExternalLink> to display marbles on the diagram
            </p>
        </div>

        <br />
        <Playground code={ apiExample } />
        <br />

        <div className="PageBlock">
            <div>
                <h2>🔗 External links</h2>
                <ul>
                    <li><b><ExternalLink href="https://rxjs.dev/">rxjs.dev</ExternalLink></b> — official website for RxJS 6</li>
                    <li><ExternalLink href="https://www.learnrxjs.io/">learnrxjs.io</ExternalLink> — clear examples, explanations, and resources for rxjs</li>
                    <li><ExternalLink href="https://rxviz.com/">rxviz.com</ExternalLink> — animated playground for rx observables</li>
                </ul>
            </div>
        </div>
    </div>
</>
