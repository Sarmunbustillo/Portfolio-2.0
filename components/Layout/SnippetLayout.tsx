import { SnippetPreview } from '../../types/types';
import { CardSnippet } from '../Card/Card';
import { CardsGrid } from '../Containers/Containers';

const SnippetLayout: React.FC<{ snippets: SnippetPreview[] }> = ({
    snippets,
}) => {
    return (
        <>
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

export default SnippetLayout;
