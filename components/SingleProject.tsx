import React, { useRef } from 'react';
import { useOnVieport } from '../lib/useOnVieport';
import SingleProjectStyles from './Styles/SingleProjectStyles';

type Props = {
  imgPath: string;
  alt: string;
  projectTitle: string;
  technologies: string[];
  projectDescription: string;
  workDone: string[];
  projectLink: string;
  layout?: string;
};

const Project = ({
  imgPath,
  alt,
  projectTitle,
  technologies,
  projectDescription,
  workDone,
  projectLink,
  layout,
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  useOnVieport(ref);
  return (
    <SingleProjectStyles ref={ref} className={layout}>
      <div className="project-pictures">
        <img src={imgPath} alt={alt} loading="lazy" height="400" width="700" />
      </div>
      <div className="project-description">
        <div className="project-tags">
          {technologies.map((label, i) => (
            <span key={`tag-${i}`}>{label}</span>
          ))}
        </div>
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
        <ul>
          {workDone.map((list, i) => (
            <li key={`list-${i}`}>{list}</li>
          ))}
        </ul>
        <div className="project-buttons">
          <span className="button-wrapper-border">
            <a
              href={projectLink}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              See Website
            </a>
          </span>
        </div>
      </div>
    </SingleProjectStyles>
  );
};

export default Project;
