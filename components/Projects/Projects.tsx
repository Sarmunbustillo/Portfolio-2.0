import styles from './Projects.module.scss';
import Project from './Project/Project';
import { CardImage } from '../Card/Card';
import { ScrollContainer } from '../Layout/Containers';
import allProjects from '../../public/data/projects/big-projects.json';
import smallProjects from '../../public/data/projects/small-projects.json';
import { DetailedProject, SimpleProject } from '../../types/projects';
const { projects } = allProjects;
const { projects: smallP } = smallProjects;

export default function Projects() {
    return (
        <>
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
                            supportHeadline,
                        }: DetailedProject) => {
                            return (
                                <Project
                                    projectTitle={projectTitle}
                                    projectDescription={projectDescription}
                                    projectLink={projectLink}
                                    workDone={workDone}
                                    imgPath={imgPath}
                                    technologies={technologies}
                                    key={id}
                                    id={id}
                                    supportHeadline={supportHeadline}
                                />
                            );
                        }
                    )}
                </div>
            </section>

            <ScrollContainer headline="Other Work">
                {smallP.map(
                    ({
                        projectTitle,
                        projectLink,
                        imgPath,
                        id,
                    }: SimpleProject) => {
                        return (
                            <CardImage
                                projectTitle={projectTitle}
                                projectLink={projectLink}
                                imgPath={imgPath}
                                key={id}
                                id={id}
                            />
                        );
                    }
                )}
            </ScrollContainer>
        </>
    );
}
