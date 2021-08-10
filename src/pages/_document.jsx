import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <link rel="icon" href="favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#000000" />
                    <base href="/" />

                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script async={true} src='https://www.google-analytics.com/analytics.js'></script>
                </Head>
                <body>
                    <a href="#content" className="visually-hidden">skip to content</a>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
