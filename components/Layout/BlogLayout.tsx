import { Articles, ScrollContainer } from '../Containers/Containers';
import { Card, CardArticlePreview } from '../Card/Card';
import { PostPreview, SimpleCard } from '../../types/types';

type BlogLayoutProps = {
    demos: SimpleCard[];
    posts: PostPreview[];
    ts_series: PostPreview[];
};

const BlogLayout: React.FC<BlogLayoutProps> = ({ demos, posts, ts_series }) => {
    return (
        <>
            <Articles
                headline="Posts"
                text="Sometimes I like to write articles about Demos I've done or deep dives into technical topics."
            >
                {posts.map(({ headline, previewText, slug, external, id }) => {
                    return (
                        <CardArticlePreview
                            headline={headline}
                            previewText={previewText}
                            slug={slug}
                            external={external}
                            key={id}
                        />
                    );
                })}
            </Articles>

            <Articles headline="Typescript series" text="">
                {ts_series.map(
                    ({ headline, previewText, slug, external, id }) => {
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
                {demos.map(({ headline, slug, external, id }) => {
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
