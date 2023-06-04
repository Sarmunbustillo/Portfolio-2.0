'use client';
import { Card } from '../Card/Card';
import { CardsGrid, ScrollContainer } from '../Containers/Containers';
import Experience from '../Experience';
import Landing from '../Landing';
import Projects from '../Projects';
import { PostPreview, Project, SimpleCard } from '../../types/types';

type Props = {
    posts: PostPreview[];
    demos: SimpleCard[];
    projects: Project[];
};
const LandingPage: React.FC<Props> = ({ posts, projects, demos }) => {
    return (
        <>
            <Landing />
            <CardsGrid headline="Featured Posts">
                {posts.map(({ headline, slug, external, id }) => {
                    return (
                        <Card
                            headline={headline}
                            slug={slug}
                            external={external}
                            key={id}
                        />
                    );
                })}
            </CardsGrid>
            <Experience />
            <Projects projects={projects} />
            <ScrollContainer
                headline="Demos"
                text="Little demos I've built to learn from and teach others"
            >
                {demos.map(({ headline, slug, external, id }) => {
                    return (
                        <Card
                            headline={headline}
                            slug={slug}
                            external={external}
                            key={id}
                        />
                    );
                })}
            </ScrollContainer>
        </>
    );
};

export default LandingPage;
