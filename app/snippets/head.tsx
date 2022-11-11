import { MetaContainer } from '../../components/Containers/Containers';

export default async function Head() {
    const meta = {
        title: 'Snippets - Sarmun Bustillo',
        description:
            'Here is a collection of useful HTML, CSS and JavaScript snippets that I have saved for future me or perhaps for present you.',
    };

    return <MetaContainer {...meta}></MetaContainer>;
}
