import styled from 'styled-components';
import { mediaQueries } from '../../lib/mediaQueries';

const ProjectsStyles = styled.div`
  --animate-x: 25vw;
  --min: var(--size-15);
  --column-gap: var(--size-8);
  --row-gap: var(--size-10);

  display: grid;
  column-gap: var(--column-gap);
  row-gap: var(--row-gap);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));

  position: relative;

  @media (max-width: ${mediaQueries.desktop}) {
    flex-direction: column;
    flex-flow: column;
    --row-gap: var(--size-7);
  }

  .test {
    position: relative;
  }

  &.animate {
    .project-pictures,
    .project-description {
      --animate-x: 0vw;
      opacity: 1;
    }
  }

  &.left {
    @media (min-width: ${mediaQueries.desktop}) {
      .project-description {
        grid-column: 1;
        grid-row: 1;
      }
    }
  }

  .project {
    &-pictures,
    &-description {
      /* transform: translate3d(var(--animate-x), 0%, 0); */
      opacity: 0;
      transition: transform 0.6s cubic-bezier(0, -0.01, 0, 0.6),
        opacity 0.8s cubic-bezier(0, -0.01, 0, 0.6) 0.1s;
    }

    &-pictures {
      --animate-x: -25vw;
      position: relative;

      img {
        object-fit: cover;
        object-position: center;
        aspect-ratio: 16/9;
        max-width: 70rem;
        width: 100%;
      }
    }

    &-description {
      --animate-x: 25vw;

      p {
        max-width: 60ch;
      }
      ul {
        display: grid;
        gap: var(--size-2);
      }
      li {
        display: grid;
        gap: var(--size-3);
        grid-template-columns: 1rem 1fr;
        align-items: flex-start;

        &::marker {
          content: none;
        }

        &::before {
          content: '';
          background: var(--linear-gradient-2) fixed;
          width: 100%;
          height: 0.5rem;
          position: relative;
          top: 1rem;
          border-radius: 2px;

          @supports (-moz-appearance: none) {
            background: var(--highlight);
          }
        }
      }
    }

    &-tags {
      display: flex;
      flex-wrap: wrap;
      column-gap: var(--size-3);
      row-gap: var(--size-1);

      @media (max-width: ${mediaQueries.mobile}) {
        margin-bottom: var(--size-2);
      }

      span {
        font-size: var(--font-size-1);
        background: var(--linear-gradient-2) fixed;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @supports (-moz-appearance: none) {
          background: var(--linear-gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    &-buttons {
      display: flex;
      gap: var(--size-6);
      margin-top: var(--size-6);

      @media (max-width: ${mediaQueries.mobile}) {
        flex-direction: column;
      }
    }
  }
`;

export default ProjectsStyles;
