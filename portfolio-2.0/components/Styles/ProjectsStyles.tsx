import styled from 'styled-components';

const ProjectsStyles = styled.section`
  position: relative;
  border-top: 8px solid var(--highlight-lighter);
  min-height: 100vh;
  background-color: var(--primary-bg);
  color: var(--primary-color-text);

  h2 {
    text-align: center;
    font-size: var(--h1);

    span {
      position: relative;
      border-bottom: 5px solid var(--highlight);
    }
  }
  * {
    z-index: 2;
    position: relative;
  }
`;

export default ProjectsStyles;
