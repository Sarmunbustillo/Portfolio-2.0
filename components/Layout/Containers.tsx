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
                <div>{children}</div>
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
            <div className={styles.grid}>{children}</div>
        </section>
    );
};

export { ScrollContainer, CardsGrid };
