import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { SimpleCard } from '../../types/projects';
import { useOnVieport } from '../../lib/useOnVieport';
import { SimpleProject } from '../../types/projects';
import styles from './Card.module.scss';

const ArrowIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            ></path>
        </svg>
    );
};

const Card = ({ text, link, external = false }: SimpleCard) => {
    if (external) {
        return (
            <a
                className={styles.card}
                target="_blank"
                href={link}
                title={text}
                aria-label={text}
            >
                <div>
                    <span>
                        <h3>{text}</h3>
                        <ArrowIcon />
                    </span>
                </div>
            </a>
        );
    }
    return (
        <Link className={styles.card} href={link}>
            <a title={text} aria-label={text}>
                <div>
                    <span>
                        <h3>{text}</h3>
                        <ArrowIcon />
                    </span>
                </div>
            </a>
        </Link>
    );
};

const CardImage = ({ imgPath, projectTitle, projectLink }: SimpleProject) => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnVieport(ref);
    return (
        <div ref={ref} className={styles.cardImage}>
            <div>
                <a
                    href={projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                >
                    <Image
                        src={imgPath}
                        alt={projectTitle}
                        loading="lazy"
                        height="180"
                        width="320"
                    />
                </a>
            </div>
            <h4 className="not-multicolor">{projectTitle}</h4>
        </div>
    );
};

export { Card, CardImage };
