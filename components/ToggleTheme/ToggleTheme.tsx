import { useEffect, useState } from 'react';
import styles from './ToggleTheme.module.scss';

const ToggleTheme = () => {
    // const storageKey = 'theme-preference';
    const [toggle, setToggle] = useState('dark');

    const triggerToggle = (): void => {
        setToggle(toggle === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        document.firstElementChild?.setAttribute('data-theme', toggle);
    }, [toggle]);

    return (
        <div className={styles.toggleWrapper}>
            <button
                className={styles.toggle}
                id="theme-toggle"
                title="Toggles light & dark"
                aria-label={toggle}
                aria-live="polite"
                type="button"
                onClick={triggerToggle}
            >
                <svg
                    className={styles.svg}
                    aria-hidden="true"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <mask id="moon" className={styles.moon}>
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="white"
                        ></rect>
                        <circle cx="24" cy="10" r="6" fill="black" />
                    </mask>

                    <circle
                        className={styles.sun}
                        cx="12"
                        cy="12"
                        r="6"
                        mask="url(#moon)"
                        fill="currentColor"
                    />
                    <g
                        id="sun-beams"
                        className={styles.beams}
                        stroke="currentColor"
                    >
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line
                            x1="18.36"
                            y1="18.36"
                            x2="19.78"
                            y2="19.78"
                        ></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default ToggleTheme;
