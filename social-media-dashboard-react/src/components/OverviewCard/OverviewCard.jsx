import React from 'react';

const OverviewCard = ({ type, count, currentStat}) => {
  return (
    <div>
      <div>{type}</div>
      <div>image</div>
      <div>{count}</div>
      <div>{currentStat}</div>
    </div>
  );
}

export default OverviewCard;