import React from 'react';

import FollowersCard from './FollowersCard';

const FollowersCardContainer = () => (
  <section>
    <FollowersCard handle={'@nathanf'} followerCount={1987} currentStat={12} />
    <FollowersCard handle={'@nathanf'} followerCount={1044} currentStat={99} />
    <FollowersCard
      handle={'@realnathanf'}
      followerCount={'11k'}
      currentStat={1099}
    />
    <FollowersCard
      handle={'Nathan F.'}
      followerCount={8239}
      currentStat={144}
    />
  </section>
);

export default FollowersCardContainer;
