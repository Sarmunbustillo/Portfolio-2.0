import { ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`

    :root {
      /* Font */
      --font-family:  'Nunito', sans-serif;
      --font-size: 112.5%; /*18px*/
      --line-height: 1.75;
      --h1:  3.052rem;
      --h2:  2.441rem;
      --h3:  1.953rem;
      --h4:  1.563rem;
      --h5: 1.25rem;
      --text: 1rem;
      --small: 0.8rem;

      /* Colors */
      /* primary */
      --white: hsl(0, 0%, 100%);

      --cyan:hsl(180, 52%, 28%);
      --cyan-20:hsl(180, 52%, 48%);
      --cyan-40:hsl(180, 52%, 68%);
      --cyan-60:hsl(180, 52%, 88%);


      --black: hsl(0, 0%, 0%);
      --black-10: hsl(0, 0%, 10%);
      --black-20: hsl(0, 0%, 20%);
      --black-30: hsl(0, 0%, 30%);

      --blue:hsl(212, 100%, 27%);
      --blue-20:hsl(212, 100%, 47%);
      --blue-40:hsl(212, 100%, 67%);
      --blue-60:hsl(212, 100%, 87%);

      /* Shadows */
      --shadow-smallest: 0px 4px 8px rgba(0,0,0,0.12);
      --shadow-small: 0 5px 10px rgba(0,0,0,0.12);
      --shadow-medium: 0 8px 30px rgba(0,0,0,0.12);
      --shadow-large: 0 30px 60px rgba(0,0,0,0.12);
    }

  html {
    box-sizing: border-box;
    font-size: var(--font-size);
    font-family: var(--font-family);
    line-height:var(--line-height);
    font-weight: 400;
  }

  *, *::before, *::after {
    box-sizing:inherit;
  }

  body {
    --primary-bg:  var(--white);
    --secudary-bg:  var(--black);
    --primary-color-text:  var(--secudary-bg);
    --secundary-color-text:  var(--primary-bg);
    background-color: var(--secudary-bg);
    color : var( --secundary-color-text);
    background-image: url('/images/glasses.jpg');

    padding: 0;
    margin: 0;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    overflow: hidden;
  }

  h1 {font-size: var(--h1)}

  h2 {font-size: var(--h2)}

  h3 {font-size: var(--h3)}

  h4 {font-size: var(--h4)}

  h5 {font-size:var(--h5)}

  small, .small {font-size: var(--small)}

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

   p,a {
   font-size: var(--text)
  }
  button {
    font-family: var(--font-family);
    line-height: var(--line-height)
  }

  
`;

const InnerStyle = styled.div``;

const Page = ({ children }: { children: ReactNode }) => (
  <div>
    <GlobalStyles />
    <InnerStyle>{children}</InnerStyle>
  </div>
);
export default Page;
