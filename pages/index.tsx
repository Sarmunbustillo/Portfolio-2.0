import { CardsGrid } from '../components/Layout/Containers';
import { Card } from '../components/Card/Card';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import blog from '../public/data/blog/posts.json';
const { posts } = blog;

export default function Home() {
    return (
        <>
            <Landing />
            <CardsGrid headline="Featured Posts">
                {posts.slice(0, 3).map(({ headline, link, external, id }) => {
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
            <Projects />
        </>
    );
}
