import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import '../styles/default.scss';
import { Layout } from '../Layout/Layout';
import {isClient} from '../shared/isServer';

// mock on client only
if (isClient) {
    require('../core/mock-delayed-execution');
}

// fake progress
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Layout><Component {...pageProps} /></Layout>
}