import styled from 'styled-components';
import { mediaQueries } from '../../lib/mediaQueries';

const ProjectsStyles = styled.div`
  --animate-x: 25vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8rem;
  position: relative;

  @media (max-width: ${mediaQueries.desktop}) {
    flex-direction: column;
    flex-flow: column;
    margin-bottom: 4rem;
  }

  &:first-of-type {
    margin-top: 6rem;
    @media (max-width: ${mediaQueries.desktop}) {
      margin-top: 4rem;
    }
  }
  &:last-of-type {
    margin-bottom: 0rem;
  }

  &.animate {
    .project-pictures,
    .project-description {
      --animate-x: 0vw;
      opacity: 1;
    }
  }

  &.left {
    flex-direction: row-reverse;
    flex-flow: row-reverse;

    @media (max-width: ${mediaQueries.desktop}) {
      flex-direction: column;
      flex-flow: column;
    }

    &::before {
      content: '';
      width: 100vw;
      height: 126%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      z-index: 0;
      background-color: var(--highlight-lighter);
      clip-path: polygon(0 13%, 100% 0, 100% 87%, 0 100%);
      opacity: 1;
    }
    &::after {
      content: '';
      width: 100vw;
      height: 122%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      z-index: 1;
      background-color: var(--white);
      clip-path: polygon(0 13%, 100% 0, 100% 87%, 0 100%);
      opacity: 1;
    }
    .project-pictures {
      --image-offset: -65%;
    }
  }

  .project-pictures,
  .project-description {
    transform: translate3d(var(--animate-x), 0%, 0);
    opacity: 0;
    transition: transform 0.6s cubic-bezier(0, -0.01, 0, 0.6),
      opacity 0.8s cubic-bezier(0, -0.01, 0, 0.6) 0.1s;
  }
  .project-pictures {
    --animate-x: -25vw;
    --image-max-width: 700px;
    --image-max-height: 400px;
    --image-min-height: 250px;
    --image-min-width: 400px;

    --image-offset: 15%;
    position: relative;

    @media (max-width: ${mediaQueries.desktop}) {
      --image-max-size: auto;
    }
    @media (max-width: ${mediaQueries.mobile}) {
      --image-min-width: 100%;
    }

    img {
      object-fit: cover;
      object-position: center;
      height: clamp(var(--image-min-height), 29vw, var(--image-max-height));
      width: clamp(var(--image-min-width), 50vw, var(--image-max-width));
    }
  }
  .project-description {
    --animate-x: 25vw;
    max-width: 40ch;
  }
`;

export default ProjectsStyles;
