import React from 'react';

import Followers from './components/FollowersCard'
import './App.css';
import OverviewCard from './components/OverviewCard';

const App = () => {
  return (
    <div>
      <Followers />
      <OverviewCard />
    </div>
  );
}

export default App;
