import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import FollowersCardContainer from './components/FollowersCard/FollowersCardContainer';
import OverviewCardContainer from './components/OverviewCard/OverviewCardContainer';
import Header from './components/header/Header';
import Toggle from './components/toggle/Toggle';
import Footnote from './components/footer/Footnote'

import { GlobalStyle } from './GlobalStyles';
import { lightTheme, darkTheme } from './theme';

const App = () => {
  const [theme, setTheme] = useState('light');

  const themeSwitch = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <main>
        <GlobalStyle />
        <Header />
        <Toggle themeSwitch={themeSwitch} />
        <FollowersCardContainer />
        <OverviewCardContainer />
        <Footnote />
      </main>
    </ThemeProvider>
  );
};

export default App;
