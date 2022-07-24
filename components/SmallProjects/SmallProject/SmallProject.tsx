import Image from 'next/image';
import React, { useRef } from 'react';
import { useOnVieport } from '../../../lib/useOnVieport';
import { SimpleProject } from '../../../types/projects';
import styles from './SmallProject.module.scss';

const SmallProject = ({
    imgPath,
    projectTitle,
    projectLink,
}: SimpleProject) => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
    useOnVieport(ref);
    return (
        <div ref={ref} className={styles.project}>
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

export default SmallProject;
