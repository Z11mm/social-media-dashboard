import React from 'react';

import { OverviewCardContentWrapper } from './OverviewStyles';

const OverviewCard = ({ type, count, currentStat, icon, rateIcon }) => {
  return (
    <OverviewCardContentWrapper>
      <div>{type}</div>
      <div>
        <img src={icon} alt='' />
      </div>
      <div>{count}</div>
      <div>
        <img src={rateIcon} alt='' />
        {currentStat}
      </div>
    </OverviewCardContentWrapper>
  );
};

export default OverviewCard;
