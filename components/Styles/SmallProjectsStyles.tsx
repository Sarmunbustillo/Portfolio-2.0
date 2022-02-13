import styled from 'styled-components';
import { mediaQueries } from '../../lib/mediaQueries';

const SmallProjectsStyles = styled.div`
  position: relative;
  background: var(--brand-dark);
  text-align: center;
  padding-block-start: var(--size-11);
  @media (max-width: ${mediaQueries.mobile}) {
    padding-block-start: var(--size-8);
  }

  .small-projects-grid {
    display: flex;
    gap: var(--size-6);
    max-width: calc(100vw - var(--size-fluid-4) * 2);
    overflow-x: scroll;
    scroll-padding: 0 50%;
    scroll-snap-type: x mandatory;
    padding: var(--size-2) 0;
  }

  @media (max-width: ${mediaQueries.mobile}) {
    padding-bottom: 4rem;
  }

  h3 {
    text-align: center;
    margin-bottom: var(--size-6);
  }
  * {
    z-index: 2;
  }
`;

export default SmallProjectsStyles;
