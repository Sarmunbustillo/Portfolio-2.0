import Head from 'next/head';

import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head key="22">
        <title>Sarmun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="Sarmun's portfolio"
          content="Showcase of my past work and skills"
        />
      </Head>
      <Landing />
      <Projects />
      <Contact />
    </>
  );
}
