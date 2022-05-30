import Image from 'next/image';
import React, { useRef } from 'react';
import { useOnVieport } from '../../../lib/useOnVieport';
import styles from './SmallProject.module.scss';

type Props = {
    imgPath: string;
    alt: string;
    projectTitle: string;
    projectLink: string;
};

const SmallProject = ({ imgPath, alt, projectTitle, projectLink }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
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
                        alt={alt}
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
