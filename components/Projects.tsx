import React from 'react';
import ProjectsStyles from './Styles/ProjectsStyles';
import Project from './Project';

export default function Projects() {
  return (
    <ProjectsStyles>
      <h2>Projects</h2>
      <div className="project-grid">
        <Project
          imgPath="../images/projects/LSS.png"
          alt="Language Service Solutions"
          projectTitle="Language Service Solutions"
          technologies={['Styled-JSX', 'React', 'Next', 'Vercel']}
          projectDescription="LSS has over 20 years of experience providing translation and interpretation services as well as consulting around language services for organizations and communities. "
          workDone={[
            'Modernized web stack to improve website performance, have better web vitals, and overall modern look and feel',
            'implemented a pixel perfect redesign',
          ]}
          projectLink="https://languageservicesolutions.com/services"
        />
        <Project
          layout="left"
          imgPath="../images/projects/project1.png"
          alt="portfolio"
          projectTitle="Portfolio"
          technologies={['React', 'Next', 'Styled-JSX']}
          projectDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore neque quos quam natus repellat? Qui sit assumenda alias cumque sint dolor. Nulla atque harum officia deserunt necessitatibus reiciendis ducimus."
          workDone={[
            'Modernized web stack to improve website performance, have better web vitals, and overall modern look and feel',
          ]}
          projectLink="#"
        />
        <Project
          imgPath="../images/projects/project1.png"
          alt="portfolio"
          projectTitle="Portfolio"
          technologies={['React', 'Next', 'Styled-JSX']}
          projectDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore neque quos quam natus repellat? Qui sit assumenda alias cumque sint dolor. Nulla atque harum officia deserunt necessitatibus reiciendis ducimus."
          workDone={[
            'Modernized web stack to improve website performance, have better web vitals, and overall modern look and feel',
          ]}
          projectLink="#"
        />
      </div>
    </ProjectsStyles>
  );
}
