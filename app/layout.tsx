/* eslint-disable @next/next/no-head-element */

import '../styles/globals.scss';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Script from 'next/script';
import localFont from 'next/font/local';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

const poppins = localFont({
    src: './Poppins-Regular.woff2',
    weight: '400',
    variable: '--font-poppins',
    display: 'swap',
});

const poppinsBold = localFont({
    src: './Poppins-Bold.woff2',
    weight: '700',
    variable: '--font-poppins-bold',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Sarmun Bustillo – Web Developer',
        template: '%s | Sarmun Bustillo',
    },
    description: 'Web developer, passionate about Javascript, CSS and the Web.',
    openGraph: {
        title: 'Sarmun Bustillo',
        description:
            'Web developer, passionate about Javascript, CSS and the Web..',
        url: 'https://www.sarmunbustillo.com',
        siteName: 'Sarmun Bustillo',
        images: [
            {
                url: 'https://www.sarmunbustillo.com/images/sarmun_social_bg.png',
                width: 1920,
                height: 1080,
            },
        ],
        locale: 'en-US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: 'Sarmun Bustillo',
        card: 'summary_large_image',
        description:
            'Web developer, passionate about Javascript, CSS and the Web.',
        siteId: '1467726470533754880',
        creator: '@sarmunbustillo',
        images: {
            url: 'https://www.sarmunbustillo.com/images/sarmun_social_bg.png',
            alt: 'Sarmun Bustillo',
        },
    },
    icons: {
        shortcut: '/favicon/favicon.ico',
    },
    manifest: '/manifest.json',
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: 'dark',
};

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={` ${poppins.className} ${poppins.variable} ${poppinsBold.variable}`}
        >
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
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon.ico"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </head>
            <body>
                <div>
                    <NavBar />
                    <main>{children}</main>
                    <Contact />
                </div>
                <Analytics />
            </body>
        </html>
    );
}
