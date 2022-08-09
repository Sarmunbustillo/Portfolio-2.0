import { Articles, ScrollContainer } from '../Layout/Containers';
import blog from '../../public/data/blog/posts.json';
import alldemos from '../../public/data/demos/demos.json';
import { Card, CardArticlePreview } from '../Card/Card';
import { ArticlePreview, SimpleCard } from '../../types/projects';

import { useEffect, useState } from 'react';

const { posts } = blog;
const { demos } = alldemos;
function shuffle(array: SimpleCard[]): SimpleCard[] {
    return array.sort(() => Math.random() - 0.5);
}

const Blogs = () => {
    const [shuffleDemos, setShuffleDemos] = useState<SimpleCard[]>([]);
    useEffect(() => {
        setShuffleDemos(shuffle(demos));
    }, [shuffleDemos]);

    return (
        <>
            <section>
                <h1>Writings</h1>
                <p>
                    Here is a copilations of some of my posts, demos and
                    snippets I've done over the past few years
                </p>
            </section>
            <Articles
                headline="Posts"
                text="Sometimes I like to write articles about Demos I've done or deep dives into technical topics."
            >
                {posts.map(
                    ({
                        headline,
                        text,
                        link,
                        external,
                        id,
                    }: ArticlePreview) => {
                        return (
                            <CardArticlePreview
                                headline={headline}
                                text={text}
                                link={link}
                                external={external}
                                key={id}
                            />
                        );
                    }
                )}
            </Articles>
            <ScrollContainer
                headline="Demos"
                text="Little demos I've built to learn from and teach others"
            >
                {shuffleDemos.map(
                    ({ headline, link, external, id }: SimpleCard) => {
                        return (
                            <Card
                                headline={headline}
                                link={link}
                                external={external}
                                key={id}
                            />
                        );
                    }
                )}
            </ScrollContainer>
        </>
    );
};
export default Blogs;
