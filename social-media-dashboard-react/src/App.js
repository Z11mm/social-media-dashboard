import React from 'react';

import FollowersCardContainer from './components/FollowersCard/FollowersCardContainer';
import './App.css';
import OverviewCardContainer from './components/OverviewCard/OverviewCardContainer';
import Header from './components/header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <FollowersCardContainer />
      <OverviewCardContainer />
    </div>
  );
};

export default App;
