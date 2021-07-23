import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Layout } from '../Layout/Layout';
import { isClient } from '../shared/isServer';
import '../styles/default.scss';
import '../lib/prism-monokai.scss';
// font-awesome config
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// add mocks for all async stuff
require('../core/mock-delayed-execution');

if (isClient()) {
    require('../lib/GA');
}

config.autoAddCss = false;

// fake progress
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    // Viewport meta tags should not be used in _document.js's <Head>
    // https://nextjs.org/docs/messages/no-document-viewport-meta

    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
}