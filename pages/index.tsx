import { CardsGrid, MetaContainer } from '../components/Containers/Containers';
import { Card } from '../components/Card/Card';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import { ArticlePreview, DetailedProject, SimpleCard } from '../types/projects';
import allProjects from '../public/data/projects/big-projects.json';

import { shuffle } from '../lib/utils';
import { getAllSmallProjects, getPreviewArticles } from '../lib/api';

const Home = ({
    posts,
    projects,
    smallProjects,
}: {
    posts: ArticlePreview[];
    projects: DetailedProject[];
    smallProjects: SimpleCard[];
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
            <Projects projects={projects} smallerProjects={smallProjects} />
        </MetaContainer>
    );
};

export async function getStaticProps() {
    const { projects }: { projects: DetailedProject[] } = allProjects;
    const smallProjects: SimpleCard[] = (await getAllSmallProjects()) || [];
    const posts: ArticlePreview[] = (await getPreviewArticles('', 3)) || [];

    return {
        props: {
            posts,
            projects,
            smallProjects: shuffle(smallProjects),
        },
    };
}

export default Home;
