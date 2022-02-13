import styled from 'styled-components';
import { mediaQueries } from '../../lib/mediaQueries';

const ProjectsStyles = styled.section`
  position: relative;
  background: var(--brand-dark);
  padding-block: var(--size-11);

  @media (max-width: ${mediaQueries.mobile}) {
    padding-block: var(--size-8);
  }

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
    gap: var(--size-10);
  }

  @media (max-width: ${mediaQueries.mobile}) {
    padding-bottom: 4rem;
  }

  h2 {
    text-align: center;
    margin-bottom: var(--size-9);
  }

  * {
    z-index: 2;
  }
`;

export default ProjectsStyles;
