import { MetaContainer } from '../../components/Containers/Containers';

export default async function Head() {
    const meta = {
        title: 'Blog - Sarmun Bustillo',
        description:
            " Here is a copilations of some of my posts, demos and, thoughts I've done over the past few years.",
    };

    return <MetaContainer {...meta}></MetaContainer>;
}
