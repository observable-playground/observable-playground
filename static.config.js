import React from 'react';
import { menu as examplesMenu } from './src/examples/';
import { homepage } from './package.json';
import { ROOT_PAGE_TITLE_PREFIX } from './src/shared/consts';

export default {
    siteRoot: homepage,
    basePath: '',
    getSiteData: ({ dev }) => ({
        dev
    }),

    getRoutes: () => {
        return [
            {
                path: '/gist/',
                noindex: true
            },
            ...examplesMenu
                .map(({ handle, library }) => {
                    return {
                        path: `/${handle}/`,
                        component: `src/Library/${handle}/index.js`,
                        getData: () => ({
                            handle,
                            library
                        }),
                        children:
                            Object.entries(library.examples)
                                .map(([key, value]) => {
                                    const route = {
                                        path: `/${key}/`,
                                        component: 'src/Example/Example.page.js',
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
        ];

    },

    Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
        <Html lang="en-US">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
                <base  href="/" />
                <title>{ ROOT_PAGE_TITLE_PREFIX }</title>

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
                    !siteData.dev &&
                        <React.Fragment>
                            <script async="true" src='https://www.google-analytics.com/analytics.js'></script>
                            <script async="true" src="/autotrack.js" />
                            <script              src="/GA.js" />
                        </React.Fragment>
                }
                {/* GOOGLE ANALYTICS }}} */}
            </Head>
            <Body>{children}</Body>
        </Html>
    ),
}
