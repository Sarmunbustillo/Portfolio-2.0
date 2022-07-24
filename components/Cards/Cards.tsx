import styles from './Cards.module.scss';

const Cards = ({
    headline = 'Cards',
    children,
}: {
    headline: string;
    children?: React.ReactNode;
}) => {
    return (
        <section id="cards" className={styles.cards}>
            <h2>{headline}</h2>
            <div className={styles.grid}>{children}</div>
        </section>
    );
};

export default Cards;
