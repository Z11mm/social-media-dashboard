import React from 'react';

import FollowersCardContainer from './components/FollowersCard/FollowersCardContainer';
import './App.css';
import OverviewCard from './components/OverviewCard/OverviewCard';

const App = () => {
  return (
    <div>
      <FollowersCardContainer />
      <OverviewCard />
    </div>
  );
};

export default App;
