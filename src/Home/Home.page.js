import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';
import { ROOT_PAGE_TITLE, ROOT_META_DESC } from '../shared/consts';
import awesomeRxjsExample from './awesome-rxjs-example';
import { ExternalLink } from '../shared/ExternalLink';

export const HomePage = () =>
    <div className="HomePage">
        <Head>
            <title>{ ROOT_PAGE_TITLE }</title>
            <meta name="description" content={ROOT_META_DESC} />
        </Head>

        <div className="PageBlock">
            <h1>
                ThinkRx — Instant marble diagrams for <Link href="/[libId]/" as="/rxjs/"><a>RxJS</a></Link>, <Link href="/[libId]/" as="/baconjs/"><a>Bacon.js</a></Link>, <Link href="/[libId]/" as="/kefir/"><a>Kefir.js</a></Link> reactive programming libraries with a bunch of examples 
            </h1>

            <blockquote>
                Know your Observables before deploying to production!
            </blockquote>

            <br />

            <PlaygroundWrapper
                code={awesomeRxjsExample}
            />

            <h2>🔍 Start exploring with these examples</h2>

            <ul>
                <li><b><Link href="/[libId]/" as="/rxjs/"><a>RxJS</a></Link></b>
                    <ul>
                        <li>creating Observable <b><Link href="/rxjs/fromPromise/"><a>from</a></Link></b> Promise</li>
                        <li><b><Link href="/rxjs/filter/"><a>filter</a></Link></b>-ing emissions</li>
                        <li>handling errors with <b><Link href="/rxjs/catch/"><a>catch</a></Link></b></li>
                        <li>switching to other Observable using <b><Link href="/rxjs/switchMap/"><a>switchMap</a></Link></b> operator</li>
                    </ul>
                    <br/>
                </li>

                <li><b><Link href="/[libId]/" as="/baconjs/"><a>Bacon</a></Link></b>
                    <ul>
                        <li><b><Link href="/[libId]/[fileId]/" as="/baconjs/interval/"><a>interval</a></Link></b> operator</li>
                    </ul>
                    <br/>
                </li>

                <li><b><Link href="/[libId]/" as="/kefir/"><a>Kefir</a></Link></b>
                    <ul>
                        <li><b><Link href="/[libId]/[fileId]/" as="/kefir/sequentially/"><a>sequentially</a></Link></b> operator</li>
                    </ul>
                    <br/>
                </li>

            </ul>

            <p>
                Try comparing <b><Link href="/[libId]/[fileId]/" as="/rxjs/interval/"><a>RxJS interval</a></Link></b>, <b><Link href="/[libId]/[fileId]/" as="/kefir/interval/"><a>Kefir.js interval</a></Link></b>, and <b><Link href="/[libId]/[fileId]/" as="/baconjs/interval/"><a>Bacon.js interval</a></Link></b>!
            </p>

            <h2>⚙️ Playground</h2>

            <p>
                This tool is aimed at assisting you in understanding
                observables by playing with them. There are some code
                examples prebuilt for you in the left menu. Further, you can
                modify any of them to see how it changes output. Once a snippet has
                changed — resulting output would be recalculated <b>instantly</b>.
            </p>

            <p>
                <b>NOTE:</b> currently this tool execution time is cut to 1000ms and 1024 operations per tick    
                And async browser APIs, like fetching, are not supported
            </p>

            <h2>💬 Feedback</h2>

            <p>
                Your feedback and help are very welcomed at <ExternalLink
                    text="github issues"
                    href="https://github.com/observable-playground/observable-playground/issues"
                >github issues</ExternalLink>!
            </p>

            <h2>🙏 Inspired by</h2>

            <p>
                <ExternalLink href={ 'http://rxmarbles.com/' } text={ 'rxmarbles.com' } />, <ExternalLink href={ 'https://www.learnrxjs.io' } text={'learnrxjs.io'}/> and great talks by <ExternalLink href={ 'http://worrydream.com/' } text={'Bret Victor'} />
            </p>
        </div>

    </div>