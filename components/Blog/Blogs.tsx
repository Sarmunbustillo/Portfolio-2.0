import Cards from '../Cards';
import styles from './Blogs.module.scss';
import blogs from '../../public/data/blogs/featured-blogs.json';
import alldemos from '../../public/data/demos/demos.json';
import Card from '../Cards/Card';
import { SimpleCard } from '../../types/projects';
const { featured_blogs } = blogs;
const { demos } = alldemos;
const Blogs = () => {
    return (
        <section id="blogs" className={styles.blogs}>
            <Cards headline="Posts">
                {featured_blogs.map(
                    ({ text, link, external, id }: SimpleCard) => {
                        return (
                            <Card
                                text={text}
                                link={link}
                                external={external}
                                key={id}
                            />
                        );
                    }
                )}
            </Cards>
            <Cards
                headline="Demos"
                text="Little demos I've built to learn from and teach others"
            >
                {demos.map(({ text, link, external, id }: SimpleCard) => {
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
        </section>
    );
};
export default Blogs;
