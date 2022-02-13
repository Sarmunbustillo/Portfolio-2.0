import React from 'react';
import SmallProject from './SingleSmallProject';
import SmallProjectsStyles from './Styles/SmallProjectsStyles';

export default function SmallProjects() {
  return (
    <SmallProjectsStyles>
      <h3>Other Work</h3>

      <div className="small-projects-grid">
        <SmallProject
          imgPath="../images/projects/Muller-uk.png"
          alt="Language Service Solutions"
          projectTitle="Müller UK"
          projectLink="https://www.muller.co.uk/"
        />
        <SmallProject
          imgPath="../images/projects/Dermalog.png"
          alt="Dermalog"
          projectTitle="Dermalog"
          projectLink="https://www.dermalog.com/"
        />
        <SmallProject
          imgPath="../images/projects/Tma.png"
          alt="TMA"
          projectTitle="TMA"
          projectLink="https://www.tma-milk.com/"
        />
        <SmallProject
          imgPath="../images/projects/Aidshilfe.png"
          alt="Aidshilfe Hamburg"
          projectTitle="Aidshilfe Hamburg"
          projectLink="https://www.aidshilfe-hamburg.de/"
        />
        <SmallProject
          imgPath="../images/projects/Rainbowworld.png"
          alt="rainbowworld"
          projectTitle="Rainbowworld"
          projectLink="https://www.rainbowworld.de/"
        />
        <SmallProject
          imgPath="../images/projects/Hamburg-pride.png"
          alt="Hamburg pride"
          projectTitle="Hamburg pride"
          projectLink="https://www.hamburg-pride.de/"
        />
      </div>
    </SmallProjectsStyles>
  );
}
