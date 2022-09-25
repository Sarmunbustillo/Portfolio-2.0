import styles from './NavBar.module.scss';
import NavbarLinks from '../NavbarLinks';
import ToggleTheme from '../ToggleTheme';
import { useState } from 'react';

const NavBar = () => {
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

export default NavBar;
