import styles from './Projects.module.scss';
import Project from './Project/Project';
import SmallProjects from '../SmallProjects/SmallProjects';
import allProjects from '../../public/projects/big-projects.json';
import { detailedProject } from '../../types/projects';
const { projects } = allProjects;
export default function Projects() {
    return (
        <section className={styles.projects}>
            <h2>Projects</h2>
            <div>
                {projects.map(
                    ({
                        projectTitle,
                        projectDescription,
                        projectLink,
                        workDone,
                        imgPath,
                        technologies,
                        id,
                    }: detailedProject) => {
                        // hide bonita cafe for now
                        return id !== 'Bonita_Cafe' ? (
                            <Project
                                projectTitle={projectTitle}
                                projectDescription={projectDescription}
                                projectLink={projectLink}
                                workDone={workDone}
                                imgPath={imgPath}
                                technologies={technologies}
                                key={id}
                                id={id}
                            />
                        ) : (
                            ''
                        );
                    }
                )}
            </div>
            <SmallProjects />
        </section>
    );
}
