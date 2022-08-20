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

export { ScrollContainer, CardsGrid, OddEvenRows, Articles };
