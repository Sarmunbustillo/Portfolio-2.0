import { MetaContainer } from '../../../components/Containers/Containers';
import { getArticleBySlug } from '../../../lib/api';
import { ParamsParsed } from '../../../types/types';

export default async function Head({ params }: { params: ParamsParsed }) {
    const article = await getArticleBySlug(`/blog/${params.slug}`);

    const meta = {
        title: `${article?.headline} - Sarmun Bustillo`,
        description: `${article?.previewText}`,
        image:
            article?.image?.url !== null && article?.image?.url !== undefined
                ? article.image.url
                : 'https://www.sarmunbustillo.com/images/sarmun_social_bg.png',

        type: 'article',
    };

    return <MetaContainer {...meta}></MetaContainer>;
}
