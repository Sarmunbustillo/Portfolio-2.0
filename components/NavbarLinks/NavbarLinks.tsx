import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavbarLinks.module.scss';

const pageLinks = [
    { path: '/', title: 'Home' },
    { path: '/blog', title: 'Blog' },
];

const LinkItem = ({ path, title }: { path: string; title: string }) => {
    return (
        <Link href={path}>
            <a title="{title}" aria-label="{title}">
                {title}
            </a>
        </Link>
    );
};

function NavbarLinks() {
    const { route } = useRouter();
    return (
        <div className={styles.NavbarLinks}>
            {pageLinks.map(({ path, title }) => {
                if (path !== route) {
                    return <LinkItem path={path} title={title} key={path} />;
                }
                return;
            })}

            <a
                href="https://github.com/Sarmunbustillo/Portfolio-2.0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarmun's portfolio's code source"
            >
                Source
            </a>
        </div>
    );
}

export default NavbarLinks;
