import { MetaContainer } from '../../components/Containers/Containers';
import BlogLayout from '../../components/Layout/BlogLayout';
import { getAllSmallDemos, getPreviewArticles } from '../../lib/api';
import { shuffle } from '../../lib/utils';
import { PostPreview, SimpleCard } from '../../types/types';

const Blog = ({
    demos,
    posts,
    ts_series,
}: {
    demos: SimpleCard[];
    posts: PostPreview[];
    ts_series: PostPreview[];
}) => {
    return (
        <MetaContainer
            title="Blog - Sarmun Bustillo"
            description=" Here is a copilations of some of my posts, demos and
        thoughts I've done over the past few years."
        >
            <section>
                <h1>Writings</h1>
                <p>
                    Here is a copilations of some of my posts, demos and
                    thoughts I&apos;ve done over the past few years.
                </p>
            </section>
            <BlogLayout demos={demos} posts={posts} ts_series={ts_series} />
        </MetaContainer>
    );
};

export async function getStaticProps() {
    const demos: SimpleCard[] = await getAllSmallDemos();
    const typescriptPosts: PostPreview[] = await getPreviewArticles(
        'Typescript',
        undefined
    );
    const webdevPosts: PostPreview[] = await getPreviewArticles(
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
