import Post from '../../components/Post/Post';
import { MetaContainer } from '../../components/Containers/Containers';
import { getAllSpecifiedSlugs, getArticleBySlug } from '../../lib/api';
import { Post as Article, ParamsParsed } from '../../types/types';

const Article: React.FC<{ article: Article }> = ({ article }) => {
    if (!article)
        return (
            <section>
                <h1>Seems there are no articles</h1>
            </section>
        );
    return (
        <MetaContainer
            title={article.headline + ' - Sarmun Bustillo'}
            description={article.previewText}
            image={
                article?.image?.url !== null &&
                article?.image?.url !== undefined
                    ? article.image.url
                    : 'https://www.sarmunbustillo.com/images/sarmun_social_bg.png'
            }
            type="article"
        >
            <section>
                <Post
                    headline={article.headline}
                    text={article.text}
                    image={article.image}
                />
            </section>
        </MetaContainer>
    );
};

export async function getStaticPaths() {
    const posts: ParamsParsed[] = await getAllSpecifiedSlugs();
    return {
        paths: posts?.map((post) => `${post.slug}`) || [],
        fallback: false,
    };
}

export async function getStaticProps({ params }: ParamsParsed) {
    const article = await getArticleBySlug(`/blog/${params?.slug}`);
    return {
        props: {
            article,
        },
    };
}

export default Article;
