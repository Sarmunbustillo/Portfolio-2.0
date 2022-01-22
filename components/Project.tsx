import React, { useEffect, useRef } from 'react';
import { useOnVieport } from '../lib/useOnVieport';
import ProjectsStyles from './Styles/ProjectStyles';

type Props = {
  imgPath: string;
  alt: string;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  projectGithub: string;
  layout?: string;
};

const Project = ({
  imgPath,
  alt,
  projectTitle,
  projectDescription,
  projectLink,
  projectGithub,
  layout,
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  useOnVieport(ref);
  return (
    <ProjectsStyles ref={ref} className={layout}>
      <div className="project-pictures">
        <img src={imgPath} alt={alt} loading="lazy" height="400" width="700" />
      </div>
      <div className="project-description">
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
        <div className="project-buttons">
          <span className="button-wrapper-border">
            <a href={projectLink} className="button">
              See Website
            </a>
          </span>
          <a href={projectGithub} className=" button button-secondary">
            Github
          </a>
        </div>
      </div>
    </ProjectsStyles>
  );
};

export default Project;
