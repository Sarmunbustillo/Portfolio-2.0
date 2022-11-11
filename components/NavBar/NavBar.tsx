'use client';
import ToggleTheme from '../ToggleTheme';
import { useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (isOpen) {
            document.body.classList.remove('scroll-freeze');
            setIsOpen(false);
        } else {
            document.body.classList.add('scroll-freeze');
            setIsOpen(true);
        }
    };

    return (
        <header className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
            <button
                onClick={handleClick}
                aria-haspopup="true"
                aria-expanded={isOpen}
                id="openmenu"
                className={`${styles.toggle}`}
            >
                <span></span>
                <span></span>
                <span></span>
                {isOpen ? 'close' : 'Menu'}
            </button>

            <ToggleTheme />
            <NavbarLinks toggle={handleClick} />
        </header>
    );
};

type NavbarLinksProps = {
    toggle: () => void;
};

const NavbarLinks: React.FC<NavbarLinksProps> = ({ toggle }) => {
    return (
        <nav aria-label="Main" className={styles.NavbarLinks}>
            <ul>
                <li>
                    <Link
                        href="/"
                        title="home"
                        aria-label="home"
                        onClick={toggle}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/blog"
                        title="blog"
                        aria-label="blog"
                        onClick={toggle}
                    >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link
                        href="/snippets"
                        title="snippets"
                        aria-label="snippets"
                        onClick={toggle}
                    >
                        snippets
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
};

export default NavBar;
