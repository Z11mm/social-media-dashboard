import React from 'react';
import { ThemeProvider } from 'styled-components';

import FollowersCardContainer from './components/FollowersCard/FollowersCardContainer';
import OverviewCardContainer from './components/OverviewCard/OverviewCardContainer';
import Header from './components/header/Header';
import { GlobalStyle } from './GlobalStyles';
import { lightTheme, darkTheme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <main>
        <GlobalStyle />
        <Header />
        <FollowersCardContainer />
        <OverviewCardContainer />
      </main>
    </ThemeProvider>
  );
};

export default App;
