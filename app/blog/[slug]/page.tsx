import { Metadata } from 'next';
import Post from '../../../components/Post/Post';

import { getAllSpecifiedSlugs, getArticleBySlug } from '../../../lib/api';
import { Post as Article, ParamsParsed } from '../../../types/types';

export async function generateStaticParams() {
    const posts: ParamsParsed[] = await getAllSpecifiedSlugs();

    return posts?.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: ParamsParsed;
}): Promise<Metadata | undefined> {
    const article = await getArticleBySlug(`/blog/${params.slug}`);

    if (!article) {
        return;
    }

    const { headline, previewText } = article;
    const image =
        article?.image?.url !== null && article?.image?.url !== undefined
            ? article.image.url
            : 'https://www.sarmunbustillo.com/images/sarmun_social_bg.png';

    return {
        title: headline,
        description: previewText,

        openGraph: {
            title: headline,
            description: previewText,
            type: 'article',
            url: `https://www.sarmunbustillo.com/blog/${params.slug}`,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: headline,
            description: previewText,
            images: [image],
        },
    };
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
