import styled from 'styled-components';
import { mediaQueries } from '../../lib/mediaQueries';

const SmallProjectsStyles = styled.div`
  display: grid;
  position: relative;
  background: var(--brand-dark);
  text-align: center;
  padding-block-start: clamp(var(--size-10), 4vw, var(--size-11));

  .small-projects-grid {
    display: flex;
    gap: var(--size-6);
    max-width: calc(100vw - var(--size-fluid-4) * 2);
    overflow-x: scroll;
    scroll-padding: 0 50%;
    scroll-snap-type: x mandatory;
    padding: var(--size-2) 0;
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
