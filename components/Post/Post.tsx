import Image from 'next/image';
import styles from './Post.module.scss';
import type { Post } from '../../types/types';

const imageCSS = { width: '100%', height: 'auto' };

const PostHeader = ({ image, headline }: Omit<Post, 'text'>) => {
    return (
        <>
            {image && (
                <div className={styles.introImage}>
                    <Image
                        className={styles.introImage}
                        src={image?.url}
                        height={image?.height as number | `${number}`}
                        width={image?.width as number | `${number}`}
                        alt={headline!}
                        sizes="100vw"
                        style={imageCSS}
                    />
                </div>
            )}
            <h1>{headline}</h1>
        </>
    );
};

const ArticleBody = ({ text }: Pick<Post, 'text'>) => {
    return (
        <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
};

const Post = ({ image, headline, text }: Post) => {
    return (
        <div className={styles.post}>
            <PostHeader image={image} headline={headline} />
            <ArticleBody text={text} />
        </div>
    );
};

export default Post;
