import React from 'react';

import { FollowersCardWrapper, Content } from './FollowersStyles';

const FollowersCard = ({
  handle,
  followerCount,
  currentStat,
  icon,
  rateIcon,
  color
}) => {
  return (
    <FollowersCardWrapper color={color.borderImage}>
      <Content>
        <img src={icon} alt='' />
        {handle}
      </Content>
      <Content>{followerCount} followers</Content>
      <Content>
        <img src={rateIcon} alt='' />
        {currentStat} Today
      </Content>
    </FollowersCardWrapper>
  );
};

export default FollowersCard;
