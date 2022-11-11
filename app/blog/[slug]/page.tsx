import Post from '../../../components/Post/Post';

import { getAllSpecifiedSlugs, getArticleBySlug } from '../../../lib/api';
import { Post as Article, ParamsParsed } from '../../../types/types';

export async function generateStaticParams() {
    const posts: ParamsParsed[] = await getAllSpecifiedSlugs();

    return posts?.map((post) => ({
        slug: post.slug,
    }));
}

export default async function SingleArticle({
    params,
}: {
    params: ParamsParsed;
}) {
    const article = await getArticleBySlug(`/blog/${params.slug}`);

    if (!article)
        return (
            <section>
                <h1>Something went wrong with this article</h1>
            </section>
        );
    return (
        <>
            <section>
                <Post
                    headline={article.headline}
                    text={article.text}
                    image={article.image}
                />
            </section>
        </>
    );
}
