import { Metadata } from 'next';
import BlogPage from '../../components/pages/BlogPage';
import { getAllSmallDemos, getPreviewArticles } from '../../lib/api';
import { shuffle } from '../../lib/utils';
import { PostPreview, SimpleCard } from '../../types/types';

export const metadata: Metadata = {
    title: 'Blog',
    description:
        "Here is a copilations of some of my posts, demos and, thoughts I've done over the past few years.",
};

export default async function Blog() {
    const { posts, ts_series, demos } = await fetchBlogData();

    return <BlogPage posts={posts} ts_series={ts_series} demos={demos} />;
}

export const revalidate = 3600;

async function fetchBlogData() {
    const demos: SimpleCard[] = await getAllSmallDemos();
    const typescriptPosts: PostPreview[] = await getPreviewArticles(
        'Typescript',
        undefined
    );
    const webdevPosts: PostPreview[] = await getPreviewArticles(
        'Webdev',
        undefined
    );

    return {
        demos: shuffle(demos),
        posts: webdevPosts || [],
        ts_series: typescriptPosts || [],
    };
}
