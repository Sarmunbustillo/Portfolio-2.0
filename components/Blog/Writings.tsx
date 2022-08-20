import { Articles, ScrollContainer } from '../Layout/Containers';
import { Card, CardArticlePreview } from '../Card/Card';
import { ArticlePreview, SimpleCard } from '../../types/projects';

const Blogs = ({
    demos,
    posts,
    ts_series,
}: {
    demos: SimpleCard[];
    posts: ArticlePreview[];
    ts_series: ArticlePreview[];
}) => {
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

            <Articles headline="Typescript series" text="">
                {ts_series.map(
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
                {demos.map(({ headline, link, external, id }: SimpleCard) => {
                    return (
                        <Card
                            headline={headline}
                            link={link}
                            external={external}
                            key={id}
                        />
                    );
                })}
            </ScrollContainer>
        </>
    );
};

export default Blogs;
