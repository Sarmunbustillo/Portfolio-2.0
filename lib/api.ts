const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.NEXT_DATOCMS_API_TOKEN;

async function fetchAPI(query: string, { variables }: any = {}) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }

    return json.data;
}

export async function getPreviewArticles(
    category: string,
    amount: 'string' | number | undefined
) {
    const data = await fetchAPI(
        `
        {
            allArticles(filter: {category: {matches: {pattern: "${category}"}}}, ${
            amount ? 'first:' + amount : ''
        }) {
                headline
                slug
                external
                previewText
                id
            }
          }
        `
    );

    return data?.allArticles;
}

export async function getAllArticlesSlugs() {
    const data = await fetchAPI(
        `
        {
            allArticles {
                slug
            }
        }
        `
    );

    return data?.allArticles;
}

export async function getArticleBySlug(slug: string | undefined) {
    if (!slug) return;
    const data = await fetchAPI(
        `
            {
                article(filter: {slug: {in: "${slug}"}}) {
                    headline
                    text(markdown: true)
                    image {
                        url
                        width
                        height
                    }
                }
            }
        `
    );

    return data?.article;
}
