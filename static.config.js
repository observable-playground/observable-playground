import React from 'react';
import { menu as examplesMenu } from './src/examples/';
import { homepage } from './package.json';
import { ROOT_PAGE_TITLE_PREFIX } from './src/shared/consts';

export default {
    siteRoot: homepage,
    getSiteData: ({ dev }) => ({
        dev
    }),

    getRoutes: async () => {
        return examplesMenu
            .map(({ handle, library }) => {
                return {
                    path: '/' + handle,
                    component: 'src/dynamic-pages/Library',
                    getData: () => ({
                        handle,
                        library
                    }),
                    children:
                        Object.entries(library.examples)
                            .map(([key, value]) => {
                                const route = {
                                    path: `/${key}`,
                                    component: 'src/dynamic-pages/Example',
                                    getData: () => ({
                                        libraryName: library.name,
                                        exampleName: key,
                                        exampleCode: value,
                                    }),
                                }

                                return route;
                            }),
                }
            })

    },

    Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
        <Html lang="en-US">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>{ ROOT_PAGE_TITLE_PREFIX }</title>
                <meta name="description" content="Learn RxJS and play with Observables in online sandbox playground" />

                {/* manifest.json provides metadata used when your web app is added to the
                homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/ */}
                <link rel="manifest" href="/manifest.json" />

                {/* GOOGLE ANALYTICS {{{
                    NOTE: [kos] adding google analitics only for production
                        would be nice to:
                        - do not download ga script for dev at all
                        - remove % NODE_ENV % reference from here
                    Global site tag (gtag.js) - Google Analytics */}
                {
                    !siteData.dev
                        && <script async="true" src="https://www.googletagmanager.com/gtag/js?id=UA-40041298-4" />
                }
                {/* GOOGLE ANALYTICS }}} */}
            </Head>
            <Body>{children}</Body>
        </Html>
    ),
}
