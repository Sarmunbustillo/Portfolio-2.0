import Link from 'next/link';

import styles from './NavbarLinks.module.scss';

function NavbarLinks({ toggle }: { toggle: () => void }) {
    return (
        <nav aria-label="Main" className={styles.NavbarLinks}>
            <ul>
                <li>
                    <Link href="/">
                        <a title="home" aria-label="home" onClick={toggle}>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a title="blog" aria-label="blog" onClick={toggle}>
                            Blog
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/snippets">
                        <a
                            title="snippets"
                            aria-label="snippets"
                            onClick={toggle}
                        >
                            snippets
                        </a>
                    </Link>
                </li>
                <li>
                    <a
                        href="https://github.com/Sarmunbustillo/Portfolio-2.0"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Sarmun's portfolio's code source"
                        title="source code"
                    >
                        Source
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavbarLinks;
