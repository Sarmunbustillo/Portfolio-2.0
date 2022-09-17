/* eslint-disable @next/next/inline-script-id */
import Document, { Html, Head, NextScript, Main } from 'next/document';
import Script from 'next/script';
import React from 'react';

export default class myDocument extends Document {
    override render() {
        return (
            <Html lang="en" data-theme="dark">
                <Head>
                    <Script
                        strategy="lazyOnload"
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    ></Script>

                    <Script strategy="lazyOnload">
                        {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){ dataLayer.push(arguments) }
                        gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                        `}
                    </Script>

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
