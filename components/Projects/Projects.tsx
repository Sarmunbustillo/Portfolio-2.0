import { DetailedProject, SimpleProject } from '../../types/projects';
import { CardImage, CardProject } from '../Card/Card';
import { OddEvenRows, ScrollContainer } from '../Layout/Containers';

export default function Projects({
    projects,
    smallerProjects,
}: {
    projects: DetailedProject[];
    smallerProjects: SimpleProject[];
}) {
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
                {smallerProjects.map(
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
