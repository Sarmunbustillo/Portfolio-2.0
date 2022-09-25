import { MetaContainer } from '../../components/Containers/Containers';
import SnippetLayout from '../../components/Layout/SnippetLayout';
import { getAllPreviewSnippets } from '../../lib/api';
import { PostPreview } from '../../types/types';

function Snippets({ snippets }: { snippets: PostPreview[] }) {
    return (
        <MetaContainer
            title="Snippets - Sarmun Bustillo"
            description=" Here is a collection of useful HTML, CSS and JavaScript snippets that I
            have saved for future me or perhapss for present you"
        >
            <section>
                <h1>Snippets</h1>
                <p>
                    Here is a collection of useful HTML, CSS, JS snippets that I
                    save for future me or maybe present you.
                </p>
            </section>
            <SnippetLayout snippets={snippets} />
        </MetaContainer>
    );
}

export async function getStaticProps() {
    const snippets = (await getAllPreviewSnippets()) || [];

    return {
        props: {
            snippets,
        },
    };
}

export default Snippets;
