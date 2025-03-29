'use client';
import ToggleTheme from '../ToggleTheme';
import { useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.scss';
import { usePathname } from 'next/navigation';

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

const links = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/snippets', label: 'Snippets' },
];

const NavbarLinks: React.FC<NavbarLinksProps> = ({ toggle }) => {
    const pathname = usePathname();

    return (
        <nav aria-label="Main" className={styles.NavbarLinks}>
            <ul>
                {links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                title={link.label}
                                onClick={toggle}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}

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
