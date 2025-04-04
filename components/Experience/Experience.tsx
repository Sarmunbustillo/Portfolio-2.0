import { useRef } from 'react';
import { useOnVieport } from '../../lib/useOnVieport';
import { TextContainer } from '../Containers/Containers';

const Experience: React.FC = () => {
    const refF7 = useRef<HTMLElement | null>(null);
    const refFr = useRef<HTMLElement | null>(null);
    const refTc = useRef<HTMLDivElement | null>(null);
    const refLg = useRef<HTMLDivElement | null>(null);
    const isOnViewportF7 = useOnVieport(
        refF7 as React.MutableRefObject<HTMLElement>
    );
    const isOnViewportFr = useOnVieport(
        refFr as React.MutableRefObject<HTMLElement>
    );
    const isOnViewportTc = useOnVieport(
        refTc as React.MutableRefObject<HTMLElement>
    );
    const isOnViewportLg = useOnVieport(
        refLg as React.MutableRefObject<HTMLElement>
    );

    return (
        <>
            <TextContainer headline="Experience">
                <article
                    ref={refF7}
                    className={`faded-out ${isOnViewportF7 ? 'fade-in' : ''}`}
                >
                    <small>March 2020 - present</small>
                    <h3>F7 Media</h3>
                    <p>
                        F7 Media is a digital agency that specializes in
                        development, conception, design, hosting, consulting,
                        content, and project management. I am responsible for:
                    </p>
                    <ul className="description-list">
                        <li>
                            Developing and maintaining client websites and
                            web-apps
                        </li>
                        <li>
                            Rewriting and migrating websites and web-apps into
                            modern technologies
                        </li>
                        <li>
                            Optimizing Web Core Vitals, SEO, and accessibility
                        </li>
                        <li>Enhancing UX</li>
                        <li>CMS integration and templating</li>
                        <li>
                            Landing pages and product launches with a focus on
                            interactions and animations{' '}
                        </li>
                        <li>
                            Maintaining and further development of our custom
                            libraries
                        </li>
                        <li>
                            Collaborating closely with designers to achieve
                            pixel perfect designs
                        </li>
                        <li>
                            Taking part in the task force group in charge of
                            migrating and upgrading the company&apos;s
                            technologies and projects to Headless CMS and SPA
                        </li>
                    </ul>
                    <p>
                        Have a look at some of the{' '}
                        <b>
                            <a
                                href="https://www.f7.de/en/projects"
                                target="_blank"
                                rel="noreferrer"
                            >
                                projects
                            </a>{' '}
                        </b>
                        and clients.
                    </p>
                </article>
                <article
                    ref={refFr}
                    className={`faded-out ${isOnViewportFr ? 'fade-in' : ''}`}
                >
                    <small>August 2019 - present</small>
                    <h3>Freelancer</h3>
                    <p>As a freelancer I do tasks such as: </p>

                    <ul className="description-list">
                        <li>
                            Developed and managed client websites and web-apps{' '}
                        </li>
                        <li>
                            Developed, maintained and integrated CMS
                            integrations and templates for clients
                        </li>
                        <li>
                            Modernized web stacks across multiple projects to
                            improve website performance, have better web vitals,
                            and have an overall modern look and feel
                        </li>
                        <li>
                            Designed layouts to match the brand look and
                            implemented them
                        </li>
                        <li>
                            Enhanced clients SEO rankings and user experience
                        </li>
                    </ul>
                    <p>
                        In the <b>projects section</b> you will find some of my
                        projects as a freelancer.
                    </p>
                </article>
            </TextContainer>

            <TextContainer
                headline="Technologies"
                text="Here are a few technologies I've been working recently:"
            >
                <div
                    ref={refTc}
                    className={`faded-out ${isOnViewportTc ? 'fade-in' : ''}`}
                >
                    <ul className="description-list horizontal">
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>React</li>
                        <li>NextJS</li>
                        <li>GraphQL</li>
                        <li>Vercel</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                        <li>Tailwind</li>
                        <li>Bootstrap</li>
                        <li>Styled-Components</li>
                        <li>HTML5</li>
                        <li>Fluid Template Engine</li>
                        <li>Typo3 CMS</li>
                        <li>Dato CMS</li>
                        <li>Accessibility</li>
                        <li>SEO</li>
                        <li>Git</li>
                    </ul>
                </div>
            </TextContainer>
            <TextContainer headline="Languages">
                <div
                    ref={refLg}
                    className={`faded-out ${isOnViewportLg ? 'fade-in' : ''}`}
                >
                    <ul className="description-list horizontal">
                        <li>Spanish (native)</li>
                        <li>English (bilingual)</li>
                        <li>German (Proficient/Fluent)</li>
                    </ul>
                </div>
            </TextContainer>
        </>
    );
};

export default Experience;
