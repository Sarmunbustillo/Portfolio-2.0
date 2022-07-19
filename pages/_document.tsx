import Document, { Html, Head, NextScript, Main } from 'next/document';
import React from 'react';

export default class myDocument extends Document {
    override render() {
        return (
            <Html lang="en" data-theme="dark">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/Poppins-Regular.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/Poppins-Bold.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="sfavicontatic/favicon-16x16.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="favicon/favicon.ico"
                    />
                    <link rel="manifest" href="favicon/site.webmanifest" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
