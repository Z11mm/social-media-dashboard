import React from 'react';

const FollowersCard = ({
  handle,
  followerCount,
  currentStat,
  icon,
  rateIcon
}) => {
  return (
    <div>
      <div>
        <img src={icon} alt='' />
        {handle}
      </div>
      <div>{followerCount} followers</div>
      <div><img src={rateIcon} alt=""/>{currentStat} Today</div>
    </div>
  );
};

export default FollowersCard;
