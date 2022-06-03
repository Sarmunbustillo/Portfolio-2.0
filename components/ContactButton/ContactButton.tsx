import styles from './ContactButton.module.scss';

function ContactButton() {
    return (
        <div className={styles.contactLinks}>
            <a href="#contact" title="contact" aria-label="contact">
                Contact
            </a>

            <a
                href="https://github.com/Sarmunbustillo/Portfolio-2.0"
                target="_blank"
                rel="noopener noreferrer"
            >
                Source
            </a>
        </div>
    );
}

export default ContactButton;
