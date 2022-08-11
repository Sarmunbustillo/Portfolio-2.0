import Writings from '../components/Blog';
import { shuffle } from '../lib/utils';
import blog from '../public/data/blog/posts.json';
import alldemos from '../public/data/demos/demos.json';
import { ArticlePreview, SimpleCard } from '../types/projects';

const Blog = ({
    demos,
    posts,
}: {
    demos: SimpleCard[];
    posts: ArticlePreview[];
}) => {
    return <Writings demos={demos} posts={posts} />;
};

export async function getStaticProps() {
    const { posts }: { posts: ArticlePreview[] } = blog;
    const { demos }: { demos: SimpleCard[] } = alldemos;

    return {
        props: {
            demos: shuffle(demos),
            posts,
        },
    };
}

export default Blog;
