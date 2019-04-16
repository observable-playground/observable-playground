import React from 'react';
import { menu as examplesMenu } from './src/examples/';
import { homepage } from './package.json';
import { ROOT_PAGE_TITLE_PREFIX } from './src/shared/consts';
import fs from 'fs-extra';
import path from 'path';
import uuid from 'uuid';

// REACT_STATIC_CACHE_BUST is needed to append an anti-cache query string for
// routInfo xhr requests. This is not the perfect solution, yet seems to be the
// only one we have
process.env['REACT_STATIC_CACHE_BUST'] = uuid.v4();

export default {
    siteRoot: homepage,
    basePath: '',
    getSiteData: ({ dev }) => ({
        dev,
        examplesMenu
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
                        template: `src/Library/${handle}/index.js`,
                        getData: () => ({
                            handle,
                            library
                        }),
                        children:
                            Object.entries(library.examples)
                                .map(([key, value]) => {

                                    if (typeof value === 'string') {
                                        const route = {
                                            path: `/${key}/`,
                                            template: 'src/Example/Example.page.js',
                                            getData: () => ({
                                                libraryName: library.name,
                                                exampleName: key,
                                                example: {
                                                    name: key,
                                                    title: key,
                                                    files: [{ name: '.js', ext: '.js', content: value }]
                                                }
                                            }),
                                        }

                                        return route;
                                    } else {
                                        const { files: filePaths, name, title } = value;

                                        const files = filePaths.map(filePath => ({
                                            name: filePath,
                                            ext: path.extname(filePath),
                                            content: fs.readFileSync(path.resolve(__dirname, 'src', filePath), 'utf8')
                                        }));

                                        const example = {
                                            name,
                                            title,
                                            files 
                                        };

                                        const route = {
                                            path: `/${key}/`,
                                            template: 'src/Example/Example.page.js',
                                            getData: () => ({
                                                libraryName: library.name,
                                                exampleName: key,
                                                example,
                                            }),
                                        }

                                        return route;
                                    }
                                }),
                    }
                })
        ];

    },

    Document: ({ Html, Head, Body, children  }) => {
        return (
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
                        // NOTE: could not find analog in react-static 7 for
                        // ```
                        //    !siteData.state === 'dev' &&
                        // ```
                        <React.Fragment>
                            <script async={true} src='https://www.google-analytics.com/analytics.js'></script>
                            <script async={true} src="/autotrack.js" />
                            <script              src="/GA.js" />
                        </React.Fragment>
                    }
                    {/* GOOGLE ANALYTICS }}} */}
                </Head>
                <Body>{children}</Body>
            </Html>
        )
    },

    plugins: [
        [
        require.resolve('react-static-plugin-source-filesystem'),
        {
            location: path.resolve('./src/pages'),
        },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
    ],
}
