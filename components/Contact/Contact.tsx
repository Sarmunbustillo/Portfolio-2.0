import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <footer id="contact" className={styles.contact}>
            <h2>Let&#39;s Talk</h2>
            <div className="links gradient-to-right">
                <span className="button-wrapper-border">
                    <a href="mailto:sarmun.b@gmail.com" className="button ">
                        Get in Touch
                    </a>
                </span>
                <span className="button-wrapper-border">
                    <a
                        href="https://www.linkedin.com/in/sarmun-bustillo-947111199"
                        className="button "
                        target="_blank"
                        rel="noreferrer"
                    >
                        Linkedin
                    </a>
                </span>
                <span className="button-wrapper-border">
                    <a
                        href="https://twitter.com/sarmunbustillo"
                        className="button "
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                </span>
            </div>
        </footer>
    );
}
