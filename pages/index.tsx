import Head from 'next/head';

import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';

export default function Home() {
    return (
        <>
            <Landing />
            <Projects />
        </>
    );
}
