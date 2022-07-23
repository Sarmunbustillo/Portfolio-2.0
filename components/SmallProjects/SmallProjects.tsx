import React from 'react';
import SmallProject from './SmallProject/SmallProject';
import styles from './SmallProject.module.scss';
import allProjects from '../../public/projects/small-projects.json';
const { projects } = allProjects;
export default function SmallProjects() {
    return (
        <div className={styles.projects}>
            <h3>Other Work</h3>
            <div>
                {projects.map(({ projectTitle, projectLink, imgPath, id }) => {
                    // hide bonita cafe for now
                    return (
                        <SmallProject
                            projectTitle={projectTitle}
                            projectLink={projectLink}
                            imgPath={imgPath}
                            key={id}
                        />
                    );
                })}
            </div>
        </div>
    );
}
