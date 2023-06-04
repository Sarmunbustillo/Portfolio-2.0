'use client';
import { CardSnippet } from '../Card/Card';
import { CardsGrid } from '../Containers/Containers';
import { SnippetPreview } from '../../types/types';

const SnippetsPage: React.FC<{ snippets: SnippetPreview[] }> = ({
    snippets,
}) => {
    return (
        <>
            <section>
                <h1>Snippets</h1>
                <p>
                    Here is a collection of useful HTML, CSS and JavaScript
                    snippets that I have saved for future me or perhaps for
                    present you.
                </p>
            </section>

            <CardsGrid headline="">
                {snippets.map(({ image, headline, previewText, slug, id }) => {
                    return (
                        <CardSnippet
                            headline={headline}
                            previewText={previewText}
                            slug={slug}
                            key={id}
                            image={image}
                        />
                    );
                })}
            </CardsGrid>
        </>
    );
};

export default SnippetsPage;
