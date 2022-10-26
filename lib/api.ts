import { ParamsParsed, Post, SimpleCard, SnippetPreview } from '../types/types';

const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.NEXT_DATOCMS_API_TOKEN;

async function fetchAPI(
    query: string,
    { variables }: { variables?: any } = {}
) {
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

// articles

export async function getPreviewArticles(
    category: string,
    amount: 'string' | number | undefined
): Promise<Post[]> {
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

export async function getArticleBySlug(
    slug: string | undefined
): Promise<Post | undefined> {
    if (!slug) return;
    const data = await fetchAPI(
        `
            {
                article(filter: {slug: {in: "${slug}"}}) {
                    headline
                    text(markdown: true)
                    previewText
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

// Snippets

export async function getAllPreviewSnippets(): Promise<SnippetPreview[]> {
    const data = await fetchAPI(
        `
        {
            allSnippets {
                id
                headline
                slug
                previewText
                image {
                  url
                  width
                  height
                }
            }
        }
        `
    );

    return data?.allSnippets;
}

export async function getSnippetBySlug(
    slug: string | undefined
): Promise<Post | undefined> {
    if (!slug) return;
    const data = await fetchAPI(
        `
            {
                snippet(filter: {slug: {in: "${slug}"}}) {
                    headline
                    text(markdown: true)
                    slug
                    id
                }
            }
        `
    );

    return data?.snippet;
}

// Small Projects
export async function getAllSmallProjects(): Promise<SimpleCard[]> {
    const data = await fetchAPI(
        `
        {
            allSmallProjects {
                slug
                id
                headline
                external
              }
        }
        `
    );

    return data?.allSmallProjects;
}

// Demos
export async function getAllSmallDemos(): Promise<SimpleCard[]> {
    const data = await fetchAPI(
        `
        {
            allDemos {
                slug
                id
                headline
                external
              }
        }
        `
    );

    return data?.allDemos;
}

// slugs
export async function getAllSpecifiedSlugs(
    type = 'allArticles'
): Promise<ParamsParsed[]> {
    const data = await fetchAPI(
        `
        {
            ${type} {
                slug
            }
        }
        `
    );

    return data[type];
}
