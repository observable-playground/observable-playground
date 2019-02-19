import React from 'react'
import awesomeRxjsExample from '../examples/awesome-rxjs-example';
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';
import { Head } from 'react-static'

import './index.css';
import { ROOT_PAGE_TITLE_PREFIX as ROOT_PAGE_TITLE } from '../shared/consts';

const ExternalLink = ({ href, text }) =>
    (<a href={href} target="_blank" rel="noopener noreferrer">{text || href}</a>);

export default () =>
    <div className="Landing">
        <Head>
            <title>{ ROOT_PAGE_TITLE }</title>
            <meta name="description" content="Learn RxJS and play with Observables in online sandbox playground" />
        </Head>

        <div className="PageBlock">
            <p>
                Learn <ExternalLink href={ 'http://reactivex.io/rxjs/' } text={'RxJS'}/> before deploying to production (for great good, of cource)
            </p>

            <p>
                This tool is aimed at assisting you in understanding
                observables by playing with them. There are some code
                examples prebuilt for you in the left menu. Further, you can
                modify any of them to see how it changes output. Once a snippet is
                changed -- resulting output would be recalculated
                IMMEDIATELY.
            </p>
            <div>
                NOTE: currently there are following limitations:
                <ul>
                    <li>- timeline is cut to 1000ms</li>
                    <li>- Promises are not supported</li>
                </ul>
            </div>

            <br />

            <p>
                Please, check the source codes of this project at <ExternalLink
                    text="github"
                    href="https://github.com/observable-playground/observable-playground"
                    />.

            </p>
            <p>
                Your feedback is welcome!
            </p>

            <br />

            <p>
                This tool was inspired by <ExternalLink href={ 'http://rxmarbles.com/' } text={ 'rxmarbles.com' } />, <ExternalLink href={ 'https://www.learnrxjs.io' } text={'learnrxjs.io'}/> and great talks by <ExternalLink href={ 'http://worrydream.com/' } text={'Bret Victor'} />
            </p>
        </div>

        <br />

        <PlaygroundWrapper
            height="200"
            code={ awesomeRxjsExample }
            />
    </div>
