/* eslint-disable @next/next/no-head-element */

import '../styles/globals.scss';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Script from 'next/script';

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <Script
                    strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                ></Script>

                <Script strategy="lazyOnload" id="google-analytics">
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
            </head>
            <body>
                <div>
                    <NavBar />
                    <main>{children}</main>
                    <Contact />
                </div>
            </body>
        </html>
    );
}
