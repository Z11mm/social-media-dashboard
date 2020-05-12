import React from 'react';

import Followers from './components/FollowersCard/FollowersCard'
import './App.css';
import OverviewCard from './components/OverviewCard/OverviewCard';

const App = () => {
  return (
    <div>
      <Followers />
      <OverviewCard />
    </div>
  );
}

export default App;
