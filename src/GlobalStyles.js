import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${({ theme }) => theme.body};
    position: relative;

    @media screen and (min-width: 800px) {
      height: 100vh;
      background: ${({ theme }) => theme.bodyDesktop};

      ::before {
        content: '';
        background-color: ${({ theme }) => theme.bodyTop};
        width: 100%;
        height: 28%;
        position: absolute;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        z-index: -1;
      }
    }
  }

  main {
    padding: 2rem 1.5rem;

    @media screen and (min-width: 800px) {
      padding: 2rem 8rem;
    }
  }
`;
