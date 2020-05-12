import React from 'react';

const OverviewCard = ({ type, count, currentStat, icon, rateIcon }) => {
  return (
    <div>
      <div>{type}</div>
      <div><img src={icon} alt=""/></div>
      <div>{count}</div>
      <div><img src={rateIcon} alt=""/>{currentStat}</div>
    </div>
  );
};

export default OverviewCard;
