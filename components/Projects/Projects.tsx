import { Project } from '../../types/types';
import { CardProject } from '../Card/Card';
import { OddEvenRows } from '../Containers/Containers';

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
    return (
        <>
            <OddEvenRows headline="Some Things I’ve Built">
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
        </>
    );
};

export default Projects;
