import styles from './Landing.module.scss';
import { useRef } from 'react';
import { useParallax } from '../../lib/useParallax';
import ContactButton from '../ContactButton';
import ToggleTheme from '../ToggleTheme';

export default function Landing() {
    const sarRef = useRef(null);
    useParallax(sarRef);
    return (
        <section className={styles.landing}>
            <div>
                <div ref={sarRef} className={styles.descripton}>
                    <h1>Sarmun Bustillo</h1>
                    <p>
                        I'm a Self-taught Frontend Web-Dev based in Hamburg
                        devoted to crafting exceptional web experiences.
                        Currently, I'm focused on building accessible, stylish
                        and meaningful web products.
                    </p>
                </div>
            </div>
            <div className={styles.image} />
            <div className={styles.image} />
            <ToggleTheme />
            <ContactButton />
        </section>
    );
}
