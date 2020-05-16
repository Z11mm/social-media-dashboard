import React from 'react';

import FollowersCardContainer from './components/FollowersCard/FollowersCardContainer';
import OverviewCardContainer from './components/OverviewCard/OverviewCardContainer';
import Header from './components/header/Header';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <FollowersCardContainer />
      <OverviewCardContainer />
    </div>
  );
};

export default App;
