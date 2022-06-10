import Head from 'next/head';

import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sarmun Bustillo</title>
                <meta
                    name="google-site-verification"
                    content="y8Q8ReoePegJKsHOCGsjfhot0Q9uiH0C8EEDKbTSviA"
                />
                <meta
                    property="og:title"
                    content="Sarmun's portfolio"
                    key="title"
                />
                <meta
                    name="description"
                    content="Showcase of Sarmun's frontend skills with projects and information about him"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>

            <Landing />
            <Projects />
            <Contact />
        </>
    );
}
