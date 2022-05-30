import React from 'react';
import SmallProject from './SmallProject/SmallProject';

import styles from './SmallProject.module.scss';

export default function SmallProjects() {
    return (
        <div className={styles.projects}>
            <h3>Other Work</h3>
            <div>
                <SmallProject
                    imgPath="/images/projects/Muller-uk.png"
                    alt="Language Service Solutions"
                    projectTitle="Müller UK"
                    projectLink="https://www.muller.co.uk/"
                />
                <SmallProject
                    imgPath="/images/projects/Dermalog.png"
                    alt="Dermalog"
                    projectTitle="Dermalog"
                    projectLink="https://www.dermalog.com/"
                />
                <SmallProject
                    imgPath="/images/projects/Tma.png"
                    alt="TMA"
                    projectTitle="TMA"
                    projectLink="https://www.tma-milk.com/"
                />
                <SmallProject
                    imgPath="/images/projects/Fta.png"
                    alt="Fta"
                    projectTitle="FTA GmbH"
                    projectLink="https://www.fta-gmbh.de/"
                />
                <SmallProject
                    imgPath="/images/projects/Aidshilfe.png"
                    alt="Aidshilfe Hamburg"
                    projectTitle="Aidshilfe Hamburg"
                    projectLink="https://www.aidshilfe-hamburg.de/"
                />
                <SmallProject
                    imgPath="/images/projects/Rainbowworld.png"
                    alt="rainbowworld"
                    projectTitle="Rainbowworld"
                    projectLink="https://www.rainbowworld.de/"
                />
                <SmallProject
                    imgPath="/images/projects/Hamburg-pride.png"
                    alt="Hamburg pride"
                    projectTitle="Hamburg pride"
                    projectLink="https://www.hamburg-pride.de/"
                />
            </div>
        </div>
    );
}
