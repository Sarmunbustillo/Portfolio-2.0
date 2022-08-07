import styles from './Cards.module.scss';

const Cards = ({
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

export default Cards;
