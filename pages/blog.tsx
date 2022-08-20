import Writings from '../components/Blog';
import { shuffle } from '../lib/utils';
import blog from '../public/data/blog/posts.json';
import typescript_series from '../public/data/blog/typescript-series.json';
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
    const { posts }: { posts: ArticlePreview[] } = blog;
    const { demos }: { demos: SimpleCard[] } = alldemos;
    const { ts_series }: { ts_series: SimpleCard[] } = typescript_series;

    return {
        props: {
            demos: shuffle(demos),
            posts,
            ts_series,
        },
    };
}

export default Blog;
