import { Metadata } from 'next';
import Post from '../../../components/Post';
import { getAllSpecifiedSlugs, getSnippetBySlug } from '../../../lib/api';
import { ParamsParsed, Post as Snippet } from '../../../types/types';

export async function generateStaticParams() {
    const snippets = (await getAllSpecifiedSlugs('allSnippets')) || [];

    return snippets?.map((snippet) => ({
        slug: snippet.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: ParamsParsed;
}): Promise<Metadata | undefined> {
    const snippet = await getSnippetBySlug(`/snippets/${params?.slug}`);

    console.log(snippet);

    if (!snippet) {
        return;
    }

    const { headline, previewText } = snippet;
    const image =
        snippet?.image?.url !== null && snippet?.image?.url !== undefined
            ? snippet.image.url
            : 'https://www.sarmunbustillo.com/images/sarmun_social_bg.png';

    return {
        title: headline,
        description: previewText,

        openGraph: {
            title: headline,
            description: previewText,
            type: 'article',
            url: `https://www.sarmunbustillo.com/snippets/${params?.slug}`,
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

export default async function SingleSnippet({
    params,
}: {
    params: ParamsParsed;
}) {
    const snippet = await getSnippetBySlug(`/snippets/${params?.slug}`);
    if (!snippet)
        return (
            <section>
                <h1>Something went wrong with this snippet</h1>
            </section>
        );
    return (
        <>
            <section>
                <Post
                    headline={snippet?.headline}
                    text={snippet?.text}
                    image={snippet?.image}
                />
            </section>
        </>
    );
}
