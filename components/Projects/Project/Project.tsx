import styles from './Project.module.scss';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useOnVieport } from '../../../lib/useOnVieport';
import { DetailedProject } from '../../../types/projects';

const Project = ({
    imgPath,
    projectTitle,
    technologies,
    projectDescription,
    workDone,
    projectLink,
    supportHeadline,
}: DetailedProject) => {
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
    const isOnViewport = useOnVieport(ref);
    return (
        <div
            ref={ref}
            className={`${styles.project} ${
                isOnViewport === true ? styles.animate : ''
            } `}
        >
            {supportHeadline && (
                <span className={styles.headline}>{supportHeadline}</span>
            )}
            <div className={styles.pictures}>
                <Image
                    src={imgPath}
                    alt={projectTitle}
                    height="400"
                    width="700"
                />
            </div>
            <div className={styles.description}>
                <div className={styles.tags}>
                    {technologies.map((label, i) => (
                        <span key={`tag-${i}`}>{label}</span>
                    ))}
                </div>
                <div className="test">
                    <h3 className="colored">{projectTitle}</h3>
                </div>
                <p>{projectDescription}</p>
                <ul>
                    {workDone.map((list, i) => (
                        <li key={`list-${i}`}>{list}</li>
                    ))}
                </ul>
                <div className={styles.button}>
                    <span className="button-wrapper-border">
                        <a
                            href={projectLink}
                            target="_blank"
                            rel="noreferrer"
                            className="button"
                        >
                            See Website
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Project;
