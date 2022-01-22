import React from 'react';
import ProjectsStyles from './Styles/ProjectsStyles';
import Project from './Project';

export default function Projects() {
  return (
    <ProjectsStyles>
      <h2>Projects</h2>
      <div className="project-grid">
        <Project
          imgPath="../images/projects/project1.png"
          alt="portfolio"
          projectTitle="Portfolio"
          projectDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore neque quos quam natus repellat? Qui sit assumenda alias cumque sint dolor. Nulla atque harum officia deserunt necessitatibus reiciendis ducimus."
          projectLink="#"
          projectGithub="#"
        />
        <Project
          layout="left"
          imgPath="../images/projects/project1.png"
          alt="portfolio"
          projectTitle="Portfolio"
          projectDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore neque quos quam natus repellat? Qui sit assumenda alias cumque sint dolor. Nulla atque harum officia deserunt necessitatibus reiciendis ducimus."
          projectLink="#"
          projectGithub="#"
        />
        <Project
          imgPath="../images/projects/project1.png"
          alt="portfolio"
          projectTitle="Portfolio"
          projectDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore neque quos quam natus repellat? Qui sit assumenda alias cumque sint dolor. Nulla atque harum officia deserunt necessitatibus reiciendis ducimus."
          projectLink="#"
          projectGithub="#"
        />
      </div>
    </ProjectsStyles>
  );
}
