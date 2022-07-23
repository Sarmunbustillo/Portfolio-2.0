import styles from './Landing.module.scss';
import { useRef } from 'react';
import { useParallax } from '../../lib/useParallax';
import NavbarLinks from '../NavbarLinks';
import ToggleTheme from '../ToggleTheme';

export default function Landing() {
    const sarRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useParallax(sarRef);
    return (
        <section className={styles.landing}>
            <div>
                <div ref={sarRef} className={styles.descripton}>
                    <h1>Sarmun Bustillo</h1>
                    <p>
                        I'm a Frontend Web-Dev based in Hamburg
                        devoted to crafting exceptional web experiences.
                        Currently, I'm focused on building accessible, stylish
                        and meaningful web products.
                    </p>
                    <span className="button-wrapper-border">
                        <a href="mailto:sarmun.b@gmail.com" className="button ">
                            Get in Touch
                        </a>
                    </span>
                </div>
            </div>
            <div className={styles.image} />
            <div className={styles.image} />
            <ToggleTheme />
            <NavbarLinks />
        </section>
    );
}
