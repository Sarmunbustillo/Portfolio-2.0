import styled, { keyframes } from 'styled-components';
import { mediaQueries } from '../../lib/mediaQueries';

const fadeIn = keyframes`
  to {
    opacity: .6;
  }
`;
const LandingStyles = styled.section`
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: repeat(4, 1fr);

  .background-image {
    background-image: url('/images/Sarmun.jpg');
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    animation: ${fadeIn} 0.6s ease-in-out forwards 0.3s;
    @supports not (-webkit-touch-callout: none) {
      background-attachment: fixed;
    }
  }

  > *:first-child {
    grid-row: 2 / span 1;
  }

  .descripton {
    --parallax-y: 0;
    --text: 1rem;
    transform: translate(0, var(--parallax-y));
    -webkit-transform: translate(0, var(--parallax-y));
    max-width: 92ch;
    position: fixed;

    @media (max-width: ${mediaQueries.mobile}) {
      width: 77vw;
    }

    h1 {
      line-height: 1.1;
      background: var(--linear-gradient-1) fixed;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 12.4ch 7.6ch;
      &:last-of-type {
        margin-bottom: 1rem;
      }
    }

    h2 {
      span {
        border: 0;
      }
    }
  }

  .highlight {
    color: var(--highlight);
  }
`;
export default LandingStyles;
