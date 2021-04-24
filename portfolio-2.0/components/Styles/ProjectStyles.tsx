import styled from 'styled-components';

const ProjectsStyles = styled.div`
  --animate-x: 25vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 0;
  position: relative;

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

    &::before {
      content: '';
      width: 100vw;
      height: 126%;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
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
      transform: translate3d(-50%, -50%, 0);
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
    --image-max-width: 500px;
    --image-max-height: 250px;
    --image-min-size: 150px;
    --image-offset: 15%;
    position: relative;
    img {
      object-fit: cover;
      object-position: center;
      height: clamp(var(--image-min-size), 42vw, var(--image-max-width));
      width: clamp(var(--image-min-size), 23vw, var(--image-max-height));

      &:last-of-type {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate3d(var(--image-offset), -50%, 0);
        width: clamp(var(--image-min-size), 42vw, var(--image-max-width));
        height: clamp(var(--image-min-size), 23vw, var(--image-max-height));
      }
    }
  }
  .project-description {
    --animate-x: 25vw;
    max-width: 40ch;
  }
`;

export default ProjectsStyles;
