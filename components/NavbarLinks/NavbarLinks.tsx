import Link from 'next/link';
import styles from './NavbarLinks.module.scss';

function NavbarLinks() {
    return (
        <div className={styles.NavbarLinks}>
            <Link href="/">
                <a title="home" aria-label="home">
                    Home
                </a>
            </Link>
            <Link href="/blog">
                <a title="Blog" aria-label="Blog">
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
