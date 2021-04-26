import styled from 'styled-components';
import { mediaQueries } from '../../lib/mediaQueries';

const ProjectsStyles = styled.section`
  position: relative;
  border-top: 8px solid var(--highlight-lighter);
  background-color: var(--primary-bg);
  color: var(--primary-color-text);

  padding-bottom: 8rem;

  @media (max-width: ${mediaQueries.mobile}) {
    padding-bottom: 4rem;
  }

  h2 {
    margin-top: 1rem;
    text-align: center;
    font-size: var(--h1);
  }
  * {
    z-index: 2;
    position: relative;
  }
`;

export default ProjectsStyles;
