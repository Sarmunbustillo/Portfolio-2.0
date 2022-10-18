import {
    CardsGrid,
    MetaContainer,
    ScrollContainer,
} from '../components/Containers/Containers';
import { Card } from '../components/Card/Card';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import { PostPreview, Project, SimpleCard } from '../types/types';
import allProjects from '../public/data/projects/big-projects.json';

import { shuffle } from '../lib/utils';
import { getAllSmallDemos, getPreviewArticles } from '../lib/api';

const Home = ({
    posts,
    projects,
    demos,
}: {
    posts: PostPreview[];
    projects: Project[];
    demos: SimpleCard[];
}) => {
    return (
        <MetaContainer>
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
        </MetaContainer>
    );
};

export async function getStaticProps() {
    const { projects } = allProjects;
    const demos: SimpleCard[] = await getAllSmallDemos();

    const posts: PostPreview[] = (await getPreviewArticles('', 3)) || [];

    return {
        props: {
            posts,
            projects,
            demos: shuffle(demos),
        },
    };
}

export default Home;
