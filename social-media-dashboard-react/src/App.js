import React from 'react';

import FollowersCardContainer from './components/FollowersCard/FollowersCardContainer';
import './App.css';
import OverviewCardContainer from './components/OverviewCard/OverviewCardContainer';

const App = () => {
  return (
    <div>
      <FollowersCardContainer />
      <OverviewCardContainer />
    </div>
  );
};

export default App;
