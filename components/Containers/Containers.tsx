/* eslint-disable @next/next/no-head-element */
'use client';
import { usePathname } from 'next/navigation';
import { MetaContainerType } from '../../types/types';
import styles from './Containers.module.scss';

type ContainerType = {
    headline?: string;
    text?: string;
    children: React.ReactNode;
};

const TextContainer: React.FC<ContainerType> = ({
    headline,
    text,
    children,
}) => {
    return (
        <section>
            {headline && (
                <h2 className={text && styles.headline}>{headline}</h2>
            )}
            {text && <p>{text}</p>}
            <div className={styles.text}>{children}</div>
        </section>
    );
};

const ScrollContainer: React.FC<ContainerType> = ({
    headline,
    text,
    children,
}) => {
    return (
        <section id="scrollContainer">
            {headline && (
                <h2 className={text && styles.headline}>{headline}</h2>
            )}
            {text && <p>{text}</p>}
            <div className={styles.scrollContainer}>
                <div className={`scroll gradient-to-right`}>{children}</div>
            </div>
        </section>
    );
};

const CardsGrid: React.FC<ContainerType> = ({ headline, text, children }) => {
    return (
        <section id="cards" className={styles.cards}>
            {headline && (
                <h2 className={text && styles.headline}>{headline}</h2>
            )}
            {text && <p>{text}</p>}
            <div
                className={`${styles.grid} gradient-to-right gradient-to-right-up-tablet`}
            >
                {children}
            </div>
        </section>
    );
};

const ProjectGrid: React.FC<ContainerType> = ({ headline, text, children }) => {
    return (
        <section id="grid" className={styles.grid}>
            {headline && (
                <h2 className={text && styles.headline}>{headline}</h2>
            )}
            {text && <p>{text}</p>}
            <div className={styles.grid}>{children}</div>
        </section>
    );
};

const Articles: React.FC<ContainerType> = ({ headline, text, children }) => {
    return (
        <section id="articles">
            {headline && (
                <h2 className={text && styles.headline}>{headline}</h2>
            )}
            {text && <p>{text}</p>}
            <div className={styles.articlePreview}>{children}</div>
        </section>
    );
};

const MetaContainer = (props: MetaContainerType) => {
    const { ...customMeta } = props;
    const pathname = usePathname();
    const meta = {
        title: 'Sarmun Bustillo – Developer, Creator, Writer.',
        description: `Frontend developer, passionate about Javascript, CSS and the Web.`,
        image: 'https://www.sarmunbustillo.com/images/sarmun_social_bg.png',
        type: 'website',
        ...customMeta,
    };

    return (
        <>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <meta content={meta.description} name="description" />
            <meta
                property="og:url"
                content={`https://www.sarmunbustillo.com${pathname}`}
            />
            <link
                rel="canonical"
                href={`https://www.sarmunbustillo.com${pathname}`}
            />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content="Sarmun Bustillo" />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@sarmunbustillo" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
        </>
    );
};

export {
    TextContainer,
    ScrollContainer,
    CardsGrid,
    ProjectGrid,
    Articles,
    MetaContainer,
};
