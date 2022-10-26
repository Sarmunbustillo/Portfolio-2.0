import { MetaContainer } from '../../components/Containers/Containers';
import Post from '../../components/Post';
import { getAllSpecifiedSlugs, getSnippetBySlug } from '../../lib/api';
import { ParamsParsed, Post as Snippet } from '../../types/types';

function Snippet({ snippet }: { snippet: Snippet }) {
    return (
        <MetaContainer
            title={snippet.headline + ' - Sarmun Bustillo'}
            description={snippet.previewText}
            image={
                snippet?.image?.url !== null &&
                snippet?.image?.url !== undefined
                    ? snippet.image.url
                    : 'https://www.sarmunbustillo.com/images/sarmun_social_bg.png'
            }
            type="article"
        >
            <section>
                <Post
                    headline={snippet.headline}
                    text={snippet.text}
                    image={snippet.image}
                />
            </section>
        </MetaContainer>
    );
}

export async function getStaticPaths() {
    const snippets = (await getAllSpecifiedSlugs('allSnippets')) || [];
    return {
        paths: snippets?.map((snippet) => `${snippet.slug}`) || [],
        fallback: false,
    };
}

export async function getStaticProps({ params }: ParamsParsed) {
    const snippet = await getSnippetBySlug(`/snippets/${params?.slug}`);
    return {
        props: {
            snippet,
        },
    };
}

export default Snippet;
