import styled from 'styled-components';

const ProjectsStyles = styled.section`
  position: relative;
  background: var(--brand-dark);
  padding-block: clamp(var(--size-9), 4vw, var(--size-11));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50vw;
    right: 0;
    width: 300vw;
    height: 0.5rem;
    background: var(--linear-gradient-2) fixed;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -50vw;
    right: 0;
    width: 300vw;
    height: 0.5rem;
    background: var(--linear-gradient-2) fixed;
  }

  .project-grid {
    display: grid;
    gap: clamp(var(--size-8), 8vw, var(--size-10));
  }

  h2 {
    text-align: center;

    margin-bottom: clamp(var(--size-8), 4vw, var(--size-9));
  }

  * {
    z-index: 2;
  }
`;

export default ProjectsStyles;
