import styles from './Landing.module.scss';
import Image from 'next/image';

export default function Landing() {
    return (
        <section id="landing" className={styles.landing}>
            <div>
                <div className={styles.descripton}>
                    <h1>Sarmun Bustillo</h1>
                    <p>
                        I&#39;m a Frontend Web-Dev based in Hamburg devoted to
                        crafting exceptional web experiences. Currently, I am
                        focused on building accessible, stylish and meaningful
                        web products.
                    </p>
                    <span className="button-wrapper-border">
                        <a href="mailto:sarmun.b@gmail.com" className="button ">
                            Get in Touch
                        </a>
                    </span>
                </div>
            </div>
            <div className={styles.image}>
                <Image
                    src="/images/sarmunLight.png"
                    alt="A photo of Sarmun Bustillo"
                    width={1200}
                    height={900}
                />
            </div>
        </section>
    );
}
