import React from 'react';

import { OverviewCardContentWrapper, OverviewContent, OverviewCount } from './OverviewStyles';
import { Stat } from '../FollowersCard/FollowersStyles';

const OverviewCard = ({ type, count, currentStat, icon, rateIcon, rateColor }) => {
  return (
    <OverviewCardContentWrapper>
      <OverviewContent>{type}</OverviewContent>
      <OverviewContent>
        <img src={icon} alt='' />
      </OverviewContent>
      <OverviewContent>
        <OverviewCount>{count}</OverviewCount>
      </OverviewContent>
      <OverviewContent>
        <img src={rateIcon} alt='' />
        <Stat rateColor={rateColor}>{currentStat}</Stat>
      </OverviewContent>
    </OverviewCardContentWrapper>
  );
};

export default OverviewCard;
