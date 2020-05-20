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
        rateColor='hsl(163, 72%, 41%)'
        color={{ borderImage: 'hsl(195, 100%, 50%)' }}
      />
      <FollowersCard
        handle={'@nathanf'}
        followerCount={1044}
        currentStat={99}
        icon={twitterIcon}
        rateIcon={riseIcon}
        rateColor='hsl(163, 72%, 41%)'
        color={{ borderImage: 'hsl(203, 89%, 53%)' }}
      />
      <FollowersCard
        handle={'@realnathanf'}
        followerCount={'11k'}
        currentStat={1099}
        icon={instagramIcon}
        rateIcon={riseIcon}
        rateColor='hsl(163, 72%, 41%)'
        color={{
          borderImage: 'linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%)) 1'
        }}
      />
      <FollowersCard
        handle={'Nathan F.'}
        followerCount={8239}
        currentStat={144}
        icon={youtubeIcon}
        rateIcon={fallIcon}
        rateColor='hsl(356, 69%, 56%)'
        color={{ borderImage: 'hsl(348, 97%, 39%)' }}
      />
    </Section>
  );
};

export default FollowersCardContainer;
