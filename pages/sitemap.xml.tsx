import { getAllArticlesSlugs } from '../lib/api';
import { ParamsParsed } from '../types/projects';

const createSitemap = (
    slugs: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
            .map((slug) => {
                return `
                <url>
                    <loc>${`https://sarmunbustillo.com${
                        slug.startsWith('/') ? slug : '/' + slug
                    }`}</loc>
                </url>
            `;
            })
            .join('')}
    </urlset>
`;
export async function getServerSideProps({ res }: { res: any }) {
    const allSlugs: ParamsParsed[] = await getAllArticlesSlugs();
    const allPages = [
        ...allSlugs.map(({ slug }) => `${slug}`),
        ...['', 'blog'],
    ];

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    );
    res.write(createSitemap(allPages));
    res.end();

    return {
        props: {},
    };
}

export default function Sitemap() {
    return null;
}
