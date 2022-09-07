import { CardsGrid, MetaContainer } from '../components/Layout/Containers';
import { Card } from '../components/Card/Card';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import { ArticlePreview, DetailedProject, SimpleCard } from '../types/projects';
import allProjects from '../public/data/projects/big-projects.json';
import smallProjects from '../public/data/projects/small-projects.json';
import { shuffle } from '../lib/utils';
import { getPreviewArticles } from '../lib/api';

const Home = ({
    posts,
    projects,
    smallerProjects,
}: {
    posts: ArticlePreview[];
    projects: DetailedProject[];
    smallerProjects: SimpleCard[];
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
            <Projects projects={projects} smallerProjects={smallerProjects} />
        </MetaContainer>
    );
};

export async function getStaticProps() {
    const { projects }: { projects: DetailedProject[] } = allProjects;
    const { projects: smallerProjects }: { projects: SimpleCard[] } =
        smallProjects;
    const posts: ArticlePreview[] = (await getPreviewArticles('', 3)) || [];
    const parsedPosts = JSON.parse(JSON.stringify(posts));

    return {
        props: {
            posts: parsedPosts,
            projects,
            smallerProjects: shuffle(smallerProjects),
        },
    };
}

export default Home;
