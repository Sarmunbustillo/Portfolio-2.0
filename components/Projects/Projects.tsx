import styles from './Projects.module.scss';
import Project from './Project/Project';
import SmallProjects from '../SmallProjects/SmallProjects';

export default function Projects() {
    return (
        <section className={styles.projects}>
            <h2>Projects</h2>
            <div>
                <Project
                    imgPath="/images/projects/LSS.png"
                    alt="Language Service Solutions"
                    projectTitle="Language Service Solutions"
                    technologies={['SCSS', 'React', 'Next', 'Vercel']}
                    projectDescription="LSS has over 20 years of experience providing translation and interpretation services as well as consulting around language services for organizations and communities. "
                    workDone={[
                        'Modernized web stack to improve website performance, have better web vitals, and overall modern look and feel',
                        'implemented a pixel perfect redesign',
                    ]}
                    projectLink="https://languageservicesolutions.com/services"
                />

                <Project
                    imgPath="/images/projects/Bonita-cafe.png"
                    alt="Bonita cafe"
                    projectTitle="Bonita Cafe"
                    technologies={[
                        'React',
                        'Next',
                        'vercel',
                        'DatoCMS',
                        'SCSS',
                    ]}
                    projectDescription="Colombian Coffee shop part of a restaurant and flower shop franchise"
                    workDone={[
                        'Design layout',
                        'Concept and strategies to increase online sells and brand marketing',
                        ' Full stack website with a CSM ',
                    ]}
                    projectLink="#"
                />
            </div>
            <SmallProjects />
        </section>
    );
}
