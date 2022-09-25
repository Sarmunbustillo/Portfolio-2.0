import { CardSnippet } from '../Card/Card';
import { CardsGrid } from '../Containers/Containers';

const SnippetLayout = ({ snippets }) => {
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
                            imgPath={image.url}
                        />
                    );
                })}
            </CardsGrid>
        </>
    );
};

export default SnippetLayout;
