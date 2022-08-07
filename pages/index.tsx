import { CardsGrid } from '../components/Layout/Containers';
import { Card } from '../components/Card/Card';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import blogs from '../public/data/blogs/featured-blogs.json';
const { featured_blogs } = blogs;

export default function Home() {
    return (
        <>
            <Landing />
            <CardsGrid headline="Featured Posts">
                {featured_blogs.map(({ text, link, external, id }) => {
                    return (
                        <Card
                            text={text}
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
