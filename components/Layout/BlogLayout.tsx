import { Articles, ScrollContainer } from '../Containers/Containers';
import { Card, CardArticlePreview } from '../Card/Card';
import { ArticlePreview, SimpleCard } from '../../types/projects';

const BlogLayout = ({
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
            <Articles
                headline="Posts"
                text="Sometimes I like to write articles about Demos I've done or deep dives into technical topics."
            >
                {posts.map(
                    ({
                        headline,
                        previewText,
                        slug,
                        external,
                        id,
                    }: ArticlePreview) => {
                        return (
                            <CardArticlePreview
                                headline={headline}
                                previewText={previewText}
                                slug={slug}
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
                        previewText,
                        slug,
                        external,
                        id,
                    }: ArticlePreview) => {
                        return (
                            <CardArticlePreview
                                headline={headline}
                                previewText={previewText}
                                slug={slug}
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
                {demos.map(({ headline, slug, external, id }: SimpleCard) => {
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
        </>
    );
};

export default BlogLayout;
