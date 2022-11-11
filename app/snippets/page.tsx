import SnippetsPage from '../../components/pages/SnippetsPage';
import { getAllPreviewSnippets } from '../../lib/api';
import { SnippetPreview } from '../../types/types';

export default async function Snippets() {
    const { snippets } = await fetchSnippetsData();
    if (!snippets) {
        return (
            <>
                <h1>Snippets</h1>
                <p>Snippets could not load. Please try again later.</p>
            </>
        );
    }
    return <SnippetsPage snippets={snippets} />;
}

export const revalidate = 3600;

async function fetchSnippetsData() {
    const snippets: SnippetPreview[] = (await getAllPreviewSnippets()) || [];

    return {
        snippets: snippets,
    };
}
