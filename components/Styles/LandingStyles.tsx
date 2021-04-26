import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  to {
    opacity: .5;
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
    background-position: bottom;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    background-attachment: fixed;
    animation: ${fadeIn} 0.6s ease-in-out forwards 0.3s;
  }

  > *:first-child {
    grid-row: 2 / span 1;
  }

  .descripton {
    --text: 1rem;
    max-width: 50ch;
    h1 {
      line-height: 0.6;
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
