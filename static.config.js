import React from 'react';
import { menu as examplesMenu } from './src/examples/';
import { homepage } from './package.json';
import { ROOT_PAGE_TITLE_PREFIX } from './src/shared/consts';
import fs from 'fs-extra';
import path from 'path';
import { addPrefetchExcludes } from 'react-static';

addPrefetchExcludes(['gist']);

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
                            getLibraryFiles(handle).map(example => {
                                return {
                                    path: `/${example.name}/`,
                                    template: 'src/Example/Example.page.js',
                                    getData: () => ({
                                        libraryName: library.name,
                                        exampleName: example.name,
                                        example,
                                    }),
                                }
                            })
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


function getLibraryFiles(libName) {
    const dirPath = 'src/examples/' + libName;
    const fullDirPath = path.resolve(__dirname, dirPath);
    const folderContents = fs.readdirSync(fullDirPath);
    return folderContents
        .map(subPath => path.resolve(fullDirPath, subPath))
        .filter(p => !fs.statSync(p).isDirectory())
        .filter(p => path.extname(p) === '.md')
        .map(p => {
            const fileName = path.basename(p, '.md');
            const fileContents = fs.readFileSync(p, 'utf-8');
            const editUrl = `https://github.com/observable-playground/observable-playground/tree/master/${dirPath}/${fileName}.md`;
            /**
             * meta format:
             *  
             *  <!--
             *  name:       alternative name to use for path
             *  title:      title to use in the h1 for the page
             *  pageTitle:  html page title
             *  desc:       meta description for SEO
             *  docsUrl:    URL to official website docs
             *  -->
             */
            const r = /(<!--\n)((.|\n)*?)(\n-->)/gm;
            const content = fileContents.replace(r, '');
            const meta =
                r.exec(fileContents)[2]
                .split(/\n/)
                .reduce((acc, curr) => {
                    const [, key, value] = /^(.*?)\s*:\s*(.*)\s*$/.exec(curr);
                    acc[key] = value;
                    return acc;
                }, {});

            return {
                ...meta,
                name: meta.name || fileName,
                editUrl, 
                content
            }
        });
};

