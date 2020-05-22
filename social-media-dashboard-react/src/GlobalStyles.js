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
  }

  main {
    padding: 2rem 1.5rem;

    @media screen and (min-width: 800px) {
      padding: 2rem 8rem;
    }
  }
`;
