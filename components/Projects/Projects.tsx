import { DetailedProject, SimpleCard } from '../../types/projects';
import { Card, CardProject } from '../Card/Card';
import { OddEvenRows, ScrollContainer } from '../Layout/Containers';

export default function Projects({
    projects,
    smallerProjects,
}: {
    projects: DetailedProject[];
    smallerProjects: SimpleCard[];
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

            <ScrollContainer headline="Took part in">
                {smallerProjects.map(
                    ({ headline, link, external, id }: SimpleCard) => {
                        return (
                            <Card
                                headline={headline}
                                link={link}
                                external={external}
                                key={id}
                            />
                        );
                    }
                )}
            </ScrollContainer>
        </>
    );
}
