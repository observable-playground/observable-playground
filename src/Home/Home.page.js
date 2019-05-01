import React from 'react'
import { Head } from 'react-static'
import awesomeRxjsExample from './awesome-rxjs-example';
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';
import { ROOT_PAGE_TITLE } from '../shared/consts';

import './Home.css';
import { Link } from '@reach/router';

const ExternalLink = ({ href, text }) =>
    (<a href={href} target="_blank" rel="noopener noreferrer">{text || href}</a>);

export const HomePage = () =>
    <div className="HomePage">
        <Head>
            <title>{ ROOT_PAGE_TITLE }</title>
            <meta name="description" content="Test your Observables code and play with marble diagrams in this REPL sandbox" />
        </Head>

        <div className="PageBlock">
            <h1>
                Lightning marble visualization for <Link to="/rxjs/">RxJS</Link>, <Link to="/baconjs/">Bacon.js</Link>, <Link to="/kefir/">Kefir.js</Link> reactive programming libraries with a bunch of examples 
            </h1>

            <blockquote>
                Test your Observables before deploying to production!
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
                <li><b><Link to="/rxjs/of/">of</Link></b> operator</li>
                <li>creating Observable <b><Link to="/rxjs/fromPromise/">from</Link></b> Promise</li>
                <li>switching to other Observable using <b><Link to="/rxjs/switchMap/">switchMap</Link></b> operator</li>
            </ul>

            <h3>Bacon</h3>
            <ul>
                <li><b><Link to="/baconjs/interval/">interval</Link></b> operator</li>
            </ul>

            <h3>Kefir</h3>
            <ul>
                <li><b><Link to="/kefir/sequentially/">sequentially</Link></b> operator</li>
            </ul>

            <blockquote>
                Try comparing <b><Link to="/rxjs/interval/">RxJS interval</Link></b>, <b><Link to="/kefir/interval/">Kefir.js interval</Link></b>, and <b><Link to="/baconjs/interval/">Bacon.js interval</Link></b>!
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