import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavbarLinks.module.scss';

function NavbarLinks() {
    const { route } = useRouter();

    return (
        <div className={styles.NavbarLinks}>
            <Link href="/">
                <a
                    title="/"
                    aria-label="/"
                    className={`${route === '/' ? styles.hide : ''}`}
                >
                    Home
                </a>
            </Link>
            <Link href="/blog">
                <a
                    title="/blog"
                    aria-label="/blog"
                    className={`${route === '/blog' ? styles.hide : ''}`}
                >
                    Blog
                </a>
            </Link>

            <a
                href="https://github.com/Sarmunbustillo/Portfolio-2.0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarmun's portfolio's code source"
            >
                Source
            </a>
        </div>
    );
}

export default NavbarLinks;
