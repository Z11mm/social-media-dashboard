import React from 'react';

import {
  FollowersCardWrapper,
  Content,
  Handle,
  Count,
  Stat
} from './FollowersStyles';

const FollowersCard = ({
  handle,
  followerCount,
  currentStat,
  icon,
  rateIcon,
  rateColor,
  cardColor
}) => {
  return (
    <FollowersCardWrapper cardColor={cardColor}>
      <Content>
        <img src={icon} alt='' />
        <Handle>{handle}</Handle>
      </Content>
      <Content>
        <Count>{followerCount}</Count>
        <p>followers</p>
      </Content>
      <Content>
        <img src={rateIcon} alt='' />
        <Stat rateColor={rateColor}>{currentStat} Today</Stat>
      </Content>
    </FollowersCardWrapper>
  );
};

export default FollowersCard;
