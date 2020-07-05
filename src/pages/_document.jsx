import Document, { Head, Main, NextScript } from 'next/document';
import { ROOT_PAGE_TITLE } from '../shared/consts';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="description"
                        content="Create amusing animated stories using emoji!"
                        />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#000000" />
                    <base href="/" />

                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script async={true} src='https://www.google-analytics.com/analytics.js'></script>
                    <script async={true} src="/autotrack.js" />
                    <script              src="/GA.js" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}