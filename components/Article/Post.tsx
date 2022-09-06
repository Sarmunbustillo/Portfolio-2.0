import Image from 'next/image';
import styles from './Post.module.scss';

import { Article } from '../../types/projects';

function PostHeader({ image, headline }: Omit<Article, 'text'>) {
    return (
        <>
            {image && (
                <Image
                    className={styles.introImage}
                    src={image?.url}
                    height={image?.height}
                    width={image?.width}
                    layout="responsive"
                    alt={headline}
                />
            )}
            <h1>{headline}</h1>
        </>
    );
}
function ArticleBody({ text }: Pick<Article, 'text'>) {
    return (
        <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
}

const Post = ({ image, headline, text }: Article) => {
    return (
        <div className={styles.post}>
            <PostHeader image={image} headline={headline} />
            <ArticleBody text={text} />
        </div>
    );
};

export default Post;
