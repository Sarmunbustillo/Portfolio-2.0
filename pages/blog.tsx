import Writings from '../components/Blog';
import { getPreviewArticles } from '../lib/api';
import { shuffle } from '../lib/utils';
import alldemos from '../public/data/demos/demos.json';
import { ArticlePreview, SimpleCard } from '../types/projects';

const Blog = ({
    demos,
    posts,
    ts_series,
}: {
    demos: SimpleCard[];
    posts: ArticlePreview[];
    ts_series: ArticlePreview[];
}) => {
    return <Writings demos={demos} posts={posts} ts_series={ts_series} />;
};

export async function getStaticProps() {
    const { demos }: { demos: SimpleCard[] } = alldemos;
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
