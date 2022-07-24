import Cards from '../components/Cards';
import Card from '../components/Cards/Card';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import blogs from '../public/data/blogs/featured-blogs.json';
const { featured_blogs } = blogs;
export default function Home() {
    return (
        <>
            <Landing />
            <Cards headline="Featured Posts">
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
            </Cards>
            <Projects />
        </>
    );
}
