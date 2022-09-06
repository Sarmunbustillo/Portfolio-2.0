import Post from '../../components/Article/Post';
import { getAllArticlesSlugs, getArticleBySlug } from '../../lib/api';
import { Article, ParamsParsed } from '../../types/projects';

function Article({ article }: { article: Article }) {
    if (!article)
        return (
            <section>
                <h1>Seems there are no articles</h1>
            </section>
        );
    return (
        <section>
            <Post
                headline={article.headline}
                text={article.text}
                image={article.image}
            />
        </section>
    );
}

export async function getStaticPaths() {
    const posts: ParamsParsed[] = await getAllArticlesSlugs();
    return {
        paths: posts?.map((post) => `${post.slug}`) || [],
        fallback: false,
    };
}

export async function getStaticProps({ params }: ParamsParsed) {
    const article: Article = await getArticleBySlug(`/blog/${params?.slug}`);
    return {
        props: {
            article,
        },
    };
}

export default Article;