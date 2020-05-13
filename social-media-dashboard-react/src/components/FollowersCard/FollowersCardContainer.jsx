import React from 'react';

import FollowersCard from './FollowersCard';
import icons from '../icons';
import { Section } from './FollowersStyles';

const FollowersCardContainer = () => {
  const {
    facebookIcon,
    instagramIcon,
    twitterIcon,
    youtubeIcon,
    riseIcon,
    fallIcon
  } = icons;

  return (
    <Section>
      <FollowersCard
        handle={'@nathanf'}
        followerCount={1987}
        currentStat={12}
        icon={facebookIcon}
        rateIcon={riseIcon}
      />
      <FollowersCard
        handle={'@nathanf'}
        followerCount={1044}
        currentStat={99}
        icon={twitterIcon}
        rateIcon={riseIcon}
      />
      <FollowersCard
        handle={'@realnathanf'}
        followerCount={'11k'}
        currentStat={1099}
        icon={instagramIcon}
        rateIcon={riseIcon}
      />
      <FollowersCard
        handle={'Nathan F.'}
        followerCount={8239}
        currentStat={144}
        icon={youtubeIcon}
        rateIcon={fallIcon}
      />
    </Section>
  );
};

export default FollowersCardContainer;
