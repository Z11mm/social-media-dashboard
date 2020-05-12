import React from 'react';

const FollowersCard = ({ handle, followerCount, currentStat }) => {
  return (
    <div>
      <div>{handle}</div>
      <div>{followerCount} followers</div>
      <div>{currentStat} Today</div>
    </div>
  );
};

export default FollowersCard;
