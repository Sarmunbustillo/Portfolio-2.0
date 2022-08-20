import { CardsGrid } from '../components/Layout/Containers';
import { Card } from '../components/Card/Card';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import blog from '../public/data/blog/posts.json';
import { ArticlePreview, DetailedProject, SimpleCard } from '../types/projects';
import allProjects from '../public/data/projects/big-projects.json';
import smallProjects from '../public/data/projects/small-projects.json';
import { shuffle } from '../lib/utils';

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
        <>
            <Landing />
            <CardsGrid headline="Featured Posts">
                {posts.map(({ headline, link, external, id }) => {
                    return (
                        <Card
                            headline={headline}
                            link={link}
                            external={external}
                            key={id}
                        />
                    );
                })}
            </CardsGrid>
            <Projects projects={projects} smallerProjects={smallerProjects} />
        </>
    );
};

export async function getStaticProps() {
    const { posts }: { posts: ArticlePreview[] } = blog;
    const { projects }: { projects: DetailedProject[] } = allProjects;
    const { projects: smallerProjects }: { projects: SimpleCard[] } =
        smallProjects;

    return {
        props: {
            posts: posts.slice(0, 3),
            projects,
            smallerProjects: shuffle(smallerProjects),
        },
    };
}

export default Home;
