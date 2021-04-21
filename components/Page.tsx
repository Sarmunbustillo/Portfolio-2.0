import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


@font-face {
    font-family: 'Nunito', sans-serif;
    src: url('/static/Nunito-regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Nunito', sans-serif;
    src: url('/static/Nunito-bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

    :root {

    }

  html {
     box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing:inherit;
  }

  body {
    font-family: 'Nunito', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: 'Nunito', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  
`;

const InnerStyle = styled.div``;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <header>
        <nav>
          <a href="" className="logo">
            Logo
          </a>
        </nav>
      </header>
      <InnerStyle>{children}</InnerStyle>
    </div>
  );
}
