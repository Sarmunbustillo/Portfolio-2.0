import { MetaContainer } from '../../components/Containers/Containers';
import BlogLayout from '../../components/Layout/BlogLayout';
import { getAllSmallDemos, getPreviewArticles } from '../../lib/api';
import { shuffle } from '../../lib/utils';
import { ArticlePreview, SimpleCard } from '../../types/projects';

const Blog = ({
    demos,
    posts,
    ts_series,
}: {
    demos: SimpleCard[];
    posts: ArticlePreview[];
    ts_series: ArticlePreview[];
}) => {
    return (
        <MetaContainer
            title="Blog - Sarmun Bustillo"
            description=" Here is a copilations of some of my posts, demos and
        snippets I've done over the past few years"
        >
            <section>
                <h1>Writings</h1>
                <p>
                    Here is a copilations of some of my posts, demos and
                    snippets I&apos;ve done over the past few years
                </p>
            </section>
            <BlogLayout demos={demos} posts={posts} ts_series={ts_series} />
        </MetaContainer>
    );
};

export async function getStaticProps() {
    const demos: SimpleCard[] = await getAllSmallDemos();
    const typescriptPosts: ArticlePreview[] = await getPreviewArticles(
        'Typescript',
        undefined
    );
    const webdevPosts: ArticlePreview[] = await getPreviewArticles(
        'Webdev',
        undefined
    );

    return {
        props: {
            demos: shuffle(demos),
            posts: webdevPosts || [],
            ts_series: typescriptPosts || [],
        },
    };
}

export default Blog;