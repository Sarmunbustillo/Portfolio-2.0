import Post from '../../../components/Post';
import { getAllSpecifiedSlugs, getSnippetBySlug } from '../../../lib/api';
import { ParamsParsed, Post as Snippet } from '../../../types/types';

export async function generateStaticParams() {
    const snippets = (await getAllSpecifiedSlugs('allSnippets')) || [];

    return snippets?.map((snippet) => ({
        slug: snippet.slug,
    }));
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
