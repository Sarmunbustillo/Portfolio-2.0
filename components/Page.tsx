import { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import { mediaQueries } from '../lib/mediaQueries';

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
      --shadow-smallest: 0px 4px 8px rgba(0,0,0,0.12);;
      --shadow-small: 0 5px 10px rgba(0,0,0,0.12);
      --shadow-small: 0 5px 10px rgba(59, 186, 186, 0.17);
      --shadow-medium: 0 8px 30px rgba(0,0,0,0.12);
      --shadow-large: 0 30px 60px rgba(0,0,0,0.12);

     /* sizes */
     --container-max-width:1400px;
     --border-radius: 4px;


      
    @media(max-width: ${mediaQueries.mobile}) {
        --h1: 2.052rem;
        --h2:  var(--h4);
        --h3: var(--h4);
        --text: .90rem;
    }
      
  }
    

  html {
    box-sizing: border-box;
    font-size: var(--font-size);
    font-family: var(--font-family);
    line-height:var(--line-height);
    font-weight: 400;
    
    overflow-x: hidden;
  }

  *, *::before, *::after {
    box-sizing:inherit;
    margin: 0;
    padding: 0;
  }

  body {
    --primary-bg:  var(--white);
    --secondary-bg:  var(--black);
    --primary-color-text:  var(--secondary-bg);
    --secondary-color-text:  var(--primary-bg);
    --highlight: var(--cyan-20);
    --highlight-lighter: var(--cyan-60);
    --highlight-darker: var(--cyan);
    background-color: var(--secondary-bg);
    color : var( --secondary-color-text);

    /* background-image: url('/images/glasses.jpg'); */
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
  }

  h1 {
    font-size: var(--h1);
    }

  h2 {
    font-size: var(--h2);
    
    span {
      position: relative;
      border-bottom: 5px solid var(--highlight);
    }
  }

  h3 {font-size: var(--h3)}

  h4 {font-size: var(--h4)}

  h5 {font-size:var(--h5)}


  small, .small {font-size: var(--small)}

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }

   p, a {
   font-size: var(--text)
  }
  p{
    margin-bottom: 1rem;
  }
  button {
    font-family: var(--font-family);
    line-height: var(--line-height)
  }

.button {
  --button-border: var(--highlight);
  --button-bg: var(--highlight);
  --button-color-text: var(--secondary-color-text);
  box-shadow: var(--shadow-small);
  display: inline-flex;
  justify-content: center;
  background-color: var(--button-bg);
  color: var(--button-color-text);
  padding: .5em 1em;
  border-radius: var(--border-radius);
  border: 2px solid var(--button-border);
  transition: background-color .3s ease-in-out, color .3s ease-in-out, border .3s ease-in-out;
  font-weight: bold;
  min-width: 8.05rem;

  @media (max-width: ${mediaQueries.mobile}) {
      display: flex;
      
      margin-bottom: 1rem;
    }
  

  &:hover {
    --button-bg:var(--highlight-darker);
    --button-border: var(--highlight-darker)
  }

  &.button-inverse {
    --button-bg: var(--primary-bg);
    --button-color-text: var(--primary-color-text);
    margin-left: 2rem;

    @media (max-width: ${mediaQueries.mobile}) {
      margin-left: 0rem;
    }
    
    &:hover {
      --button-bg: var(--highlight);
      --button-border: var(--highlight);
      --button-color-text: var(--secondary-color-text)
    }

  }
}`;

const Page = ({ children }: { children: ReactNode }) => (
  <div>
    <GlobalStyles />
    {children}
  </div>
);
export default Page;
