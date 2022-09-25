import { Project, SimpleCard } from '../../types/types';
import { Card, CardProject } from '../Card/Card';
import { OddEvenRows, ScrollContainer } from '../Containers/Containers';

export default function Projects({
    projects,
    smallerProjects,
}: {
    projects: Project[];
    smallerProjects: SimpleCard[];
}) {
    return (
        <>
            <OddEvenRows headline="Projects">
                {projects.map(
                    ({
                        headline,
                        description,
                        slug,
                        workDone,
                        image,
                        technologies,
                        id,
                        supportHeadline,
                    }) => {
                        return (
                            <CardProject
                                headline={headline}
                                description={description}
                                slug={slug!}
                                workDone={workDone}
                                image={image}
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
                    ({ headline, slug: link, external, id }) => {
                        return (
                            <Card
                                headline={headline}
                                slug={link}
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
