import { CardImage, CardProject } from '../Card/Card';
import { OddEvenRows, ScrollContainer } from '../Layout/Containers';
import allProjects from '../../public/data/projects/big-projects.json';
import smallProjects from '../../public/data/projects/small-projects.json';
import { DetailedProject, SimpleProject } from '../../types/projects';
const { projects } = allProjects;
const { projects: smallP } = smallProjects;

export default function Projects() {
    return (
        <>
            <OddEvenRows headline="Projects">
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
                            <CardProject
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
            </OddEvenRows>

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
