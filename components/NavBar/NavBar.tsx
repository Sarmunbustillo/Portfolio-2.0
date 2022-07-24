import styles from './NavBar.module.scss';
import NavbarLinks from '../NavbarLinks';
import ToggleTheme from '../ToggleTheme';

const NavBar = () => {
    return (
        <header className={styles.navigation}>
            <ToggleTheme />
            <NavbarLinks />
        </header>
    );
};

export default NavBar;
