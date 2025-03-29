import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
    PostPreview,
    Project,
    SimpleCard,
    SnippetPreview,
} from '../../types/types';
import { useOnVieport } from '../../lib/useOnVieport';
import styles from './Card.module.scss';

const ArrowIcon: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            style={{ maxWidth: 'var(--size-7)' }}
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            ></path>
        </svg>
    );
};

const Card: React.FC<SimpleCard> = ({ headline, slug, external = false }) => {
    if (external) {
        return (
            <a
                className={styles.card}
                target="_blank"
                href={slug}
                title={headline}
                rel="noreferrer"
            >
                <div>
                    <span>
                        <h3 className="h4">{headline}</h3>
                        <ArrowIcon />
                    </span>
                </div>
            </a>
        );
    }
    return (
        <Link href={slug!} className={styles.card} title={headline}>
            <div>
                <span>
                    <h3 className="h4">{headline}</h3>
                    <ArrowIcon />
                </span>
            </div>
        </Link>
    );
};

const CardArticlePreview: React.FC<PostPreview> = ({
    headline,
    previewText,
    slug,
    external = false,
}) => {
    if (external) {
        return (
            <a
                className={styles.articlePreview}
                target="_blank"
                href={slug}
                title={headline}
                rel="noreferrer"
            >
                <div>
                    {headline && <h3 className="h4">{headline}</h3>}
                    {previewText && <p>{previewText}</p>}
                </div>
            </a>
        );
    }
    return (
        <Link href={slug!} className={styles.articlePreview} title={headline}>
            <div>
                {headline && <h3 className="h4">{headline}</h3>}
                {previewText && <p>{previewText}</p>}
            </div>
        </Link>
    );
};

const SnippetImageCSS = { width: '30px', height: 'auto', aspectRatio: '1 /1' };

const CardSnippet: React.FC<SnippetPreview> = ({
    image,
    headline,
    slug,
    previewText,
}: SnippetPreview) => {
    return (
        <Link href={slug!} className={styles.Cardsnippet} title={headline}>
            <div>
                {headline && <h3 className="h4">{headline}</h3>}
                {previewText && <p>{previewText}</p>}
                <div className={styles.icons}>
                    <div className={styles.images}>
                        {image?.length > 0
                            ? image?.map((img) => (
                                  <Image
                                      src={img.url}
                                      alt={headline!}
                                      height="30"
                                      width="30"
                                      style={SnippetImageCSS}
                                      key={img.url}
                                  />
                              ))
                            : null}
                    </div>
                    <ArrowIcon />
                </div>
            </div>
        </Link>
    );
};

const CardImageCSS = { width: '100%', height: 'auto' };
const CardProject: React.FC<Project> = ({
    image,
    headline,
    technologies,
    description,
    workDone,
    slug,
    supportHeadline,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isOnViewport = useOnVieport(
        ref as React.MutableRefObject<HTMLElement>
    );

    return (
        <div
            ref={ref}
            className={`${styles.cardProject} faded-out ${
                isOnViewport ? 'fade-in' : ''
            } `}
        >
            <div className={styles.pictures}>
                {supportHeadline && (
                    <span className={styles.support}>{supportHeadline}</span>
                )}
                <Image
                    src={image?.url ? image?.url : '#'}
                    alt={headline!}
                    height="400"
                    width="700"
                    sizes="100vw"
                    style={CardImageCSS}
                />
            </div>
            <div className={styles.description}>
                <div className={styles.tags}>
                    {technologies.map((label, i) => (
                        <span key={`tag-${i}`}>{label}</span>
                    ))}
                </div>
                <div className="test">
                    <h3>{headline}</h3>
                </div>
                <p>{description}</p>
                <ul className="description-list">
                    {workDone.map((list, i) => (
                        <li key={`list-${i}`}>{list}</li>
                    ))}
                </ul>
                <div className={styles.button}>
                    <span className="button-wrapper-border">
                        <a
                            href={slug}
                            target="_blank"
                            rel="noreferrer"
                            className="button"
                        >
                            See Website
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export { Card, CardSnippet, CardProject, CardArticlePreview };
