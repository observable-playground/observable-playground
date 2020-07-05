import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';
import { ROOT_PAGE_TITLE } from '../shared/consts';
import awesomeRxjsExample from './awesome-rxjs-example';
import { ExternalLink } from '../shared/ExternalLink';

export const HomePage = () =>
    <div className="HomePage">
        <Head>
            <title>{ ROOT_PAGE_TITLE }</title>
            <meta name="description" content="Test your Observables code and play with marble diagrams in this REPL sandbox" />
        </Head>

        <div className="PageBlock">
            <h1>
                Instant marble visualization for <Link href="/[libId]/" as="/rxjs/"><a>RxJS</a></Link>, <Link href="/[libId]/" as="/baconjs/"><a>Bacon.js</a></Link>, <Link href="/[libId]/" as="/kefir/"><a>Kefir.js</a></Link> reactive programming libraries with a bunch of examples 
            </h1>

            <blockquote>
                Know your Observables before deploying to production!
            </blockquote>

            <br />

            <PlaygroundWrapper
                code={awesomeRxjsExample}
            />

            <p>
                This tool is aimed at assisting you in understanding
                observables by playing with them. There are some code
                examples prebuilt for you in the left menu. Further, you can
                modify any of them to see how it changes output. Once a snippet has
                changed — resulting output would be recalculated <b>immediately</b>.
            </p>

            <h2>Start exploring with these examples:</h2>

            <h3>RxJS</h3>
            <ul>
                <li><b><Link href="/[libId]/[fileId]/" as="/rxjs/of/"><a>of</a></Link></b> operator</li>
                <li>creating Observable <b><Link href="/rxjs/fromPromise/"><a>from</a></Link></b> Promise</li>
                <li>switching to other Observable using <b><Link href="/rxjs/switchMap/"><a>switchMap</a></Link></b> operator</li>
            </ul>

            <h3>Bacon</h3>
            <ul>
                <li><b><Link href="/[libId]/[fileId]/" as="/baconjs/interval/"><a>interval</a></Link></b> operator</li>
            </ul>

            <h3>Kefir</h3>
            <ul>
                <li><b><Link href="/[libId]/[fileId]/" as="/kefir/sequentially/"><a>sequentially</a></Link></b> operator</li>
            </ul>

            <blockquote>
                Try comparing <b><Link href="/[libId]/[fileId]/" as="/rxjs/interval/"><a>RxJS interval</a></Link></b>, <b><Link href="/[libId]/[fileId]/" as="/kefir/interval/"><a>Kefir.js interval</a></Link></b>, and <b><Link href="/[libId]/[fileId]/" as="/baconjs/interval/"><a>Bacon.js interval</a></Link></b>!
            </blockquote>

            <p>
                <b>NOTE:</b> currently this tool has following limitations:
            </p>

            <ul>
                <li>timeline is cut to 1000ms</li>
                <li>async browser api is not supported</li>
            </ul>

            <p>
                Your feedback is always welcome at <ExternalLink
                    text="github issues section"
                    href="https://github.com/observable-playground/observable-playground/issues"
                    />!
            </p>

            <br />

            <p>
                Inspired by <ExternalLink href={ 'http://rxmarbles.com/' } text={ 'rxmarbles.com' } />, <ExternalLink href={ 'https://www.learnrxjs.io' } text={'learnrxjs.io'}/> and great talks by <ExternalLink href={ 'http://worrydream.com/' } text={'Bret Victor'} />
            </p>
        </div>

    </div>