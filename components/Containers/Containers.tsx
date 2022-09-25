import Head from 'next/head';
import { useRouter } from 'next/router';
import { MetaContainerType } from '../../types/projects';
import styles from './Containers.module.scss';

const ScrollContainer = ({
    headline,
    text,
    children,
}: {
    headline?: string;
    text?: string;
    children: React.ReactNode;
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

const CardsGrid = ({
    headline,
    text,
    children,
}: {
    headline?: string;
    text?: string;
    children: React.ReactNode;
}) => {
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

const OddEvenRows = ({
    headline,
    text,
    children,
}: {
    headline?: string;
    text?: string;
    children: React.ReactNode;
}) => {
    return (
        <section id="oddEven" className={styles.oddEven}>
            {headline && (
                <h2 className={text && styles.headline}>{headline}</h2>
            )}
            {text && <p>{text}</p>}
            <div className={styles.grid}>{children}</div>
        </section>
    );
};

const Articles = ({
    headline,
    text,
    children,
}: {
    headline?: string;
    text?: string;
    children: React.ReactNode;
}) => {
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
    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
        title: 'Sarmun Bustillo – Developer, Creator, Writer.',
        description: `Frontend developer, passionate about Javascript, CSS and the Web.`,
        image: 'https://www.sarmunbustillo.com/images/sarmun_social_bg.png',
        type: 'website',
        ...customMeta,
    };

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://www.sarmunbustillo.com${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://www.sarmunbustillo.com${router.asPath}`}
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
            </Head>
            {children}
        </>
    );
};

export { ScrollContainer, CardsGrid, OddEvenRows, Articles, MetaContainer };
