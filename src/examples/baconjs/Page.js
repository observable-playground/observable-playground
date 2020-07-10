import Head from 'next/head';
import React from 'react';
import { PlaygroundWrapper } from '../../Playground/PlaygroundWrapper';
import { createGenericDescription } from '../../shared/consts';
import { ExternalLink } from '../../shared/ExternalLink';
import basicExample from './basic.example';

export default () =>
<React.Fragment>
    <Head>
        <title>Bacon.js playground and examples</title>
        <meta name="description" content={createGenericDescription('Bacon.js')} />
    </Head>

    <div key="Bacon">
        <div className="PageBlock">
            <h1>Bacon.js Playground</h1>

            <blockquote>
                <p>A small functional reactive programming lib for JavaScript. Turns your event spaghetti into clean and declarative feng shui bacon, by switching from imperative to functional.</p>
            </blockquote>

            <p>
                To visualize the observables we developed a small API. Provided <code>api/v0.3</code> package has a function <code>baconObserver(title: string): f(Event)</code>, that you can call to create a <ExternalLink href="https://baconjs.github.io/api2.html#observable-subscribe">subscribe function</ExternalLink>, which will display its state on the time chart in the right part of the screen.
            </p>
        </div>

        <br />
        <PlaygroundWrapper code={ basicExample } />
        <br />

        <div className="PageBlock">
            <div>
                <h2>External links</h2>
                <ul>
                    <li><b><ExternalLink href="https://baconjs.github.io/">baconjs.github.io</ExternalLink></b> — Official Bacon.Js page</li>
                </ul>
            </div>
        </div>
    </div>
</React.Fragment>