import { Metadata } from 'next';
import SnippetsPage from '../../components/pages/SnippetsPage';
import { getAllPreviewSnippets } from '../../lib/api';
import { SnippetPreview } from '../../types/types';
export const metadata: Metadata = {
    title: 'Snippets',
    description:
        'Here is a collection of useful HTML, CSS and JavaScript snippets that I have saved for future me or perhaps for present you.',
};

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
