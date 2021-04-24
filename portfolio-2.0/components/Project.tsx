import React, { useEffect, useRef } from 'react';
import { useOnVieport } from '../lib/useOnVieport';
import ProjectsStyles from './Styles/ProjectStyles';

type Props = {
  imgPath: string;
  alt: string;
  imgPath2: string;
  alt2: string;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  projectGithub: string;
  layout?: string;
};

const Project = ({
  imgPath,
  alt,
  imgPath2,
  alt2,
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
        <img src={imgPath} alt={alt} loading="lazy" height="500" width="250" />
        <img
          src={imgPath2}
          alt={alt2}
          loading="lazy"
          height="250"
          width="500"
        />
      </div>
      <div className="project-description">
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
        <a href={projectLink} className="button">
          See Website
        </a>
        <a href={projectGithub} className=" button button-inverse">
          Github
        </a>
      </div>
    </ProjectsStyles>
  );
};

export default Project;
