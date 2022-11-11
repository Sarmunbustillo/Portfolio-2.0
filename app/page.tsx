import { PostPreview, SimpleCard } from '../types/types';
import allProjects from '../public/data/projects/big-projects.json';
import { shuffle } from '../lib/utils';
import { getAllSmallDemos, getPreviewArticles } from '../lib/api';
import LandingPage from '../components/pages/LandingPage';

export default async function Page() {
    const { posts, projects, demos } = await fetchIntroData();

    return <LandingPage posts={posts} demos={demos} projects={projects} />;
}
export const revalidate = 3600;

async function fetchIntroData() {
    const { projects } = allProjects;

    const demos: SimpleCard[] = (await getAllSmallDemos()) || [];
    const posts: PostPreview[] = (await getPreviewArticles('', 3)) || [];

    return {
        posts,
        projects,
        demos: shuffle(demos),
    };
}
