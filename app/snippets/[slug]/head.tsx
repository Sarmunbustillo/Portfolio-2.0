import { MetaContainer } from '../../../components/Containers/Containers';
import { getSnippetBySlug } from '../../../lib/api';
import { ParamsParsed } from '../../../types/types';

export default async function Head({ params }: { params: ParamsParsed }) {
    const snippet = await getSnippetBySlug(`/snippets/${params?.slug}`);

    const meta = {
        title: `${snippet?.headline} - Sarmun Bustillo`,
        description: `${snippet?.previewText}`,
        image:
            snippet?.image?.url !== null && snippet?.image?.url !== undefined
                ? snippet.image.url
                : 'https://www.sarmunbustillo.com/images/sarmun_social_bg.png',

        type: 'article',
    };

    return <MetaContainer {...meta}></MetaContainer>;
}

{
}
