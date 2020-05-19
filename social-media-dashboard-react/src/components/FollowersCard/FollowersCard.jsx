import React from 'react';

import { FollowersCardWrapper, Content, Handle } from './FollowersStyles';

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
        <Handle>{handle}</Handle>
      </Content>
      <Content>
        <span>{followerCount}</span>
        <p>followers</p>
      </Content>
      <Content>
        <img src={rateIcon} alt='' />
        <span>{currentStat} Today</span>
      </Content>
    </FollowersCardWrapper>
  );
};

export default FollowersCard;
