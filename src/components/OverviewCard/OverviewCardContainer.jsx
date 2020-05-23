import React from 'react';
import OverviewCard from './OverviewCard';

import icons from '../icons';
import { Section, OverviewCardWrapper, H2 } from './OverviewStyles';

const OverviewCardContainer = () => {
  const {
    twitterIcon,
    facebookIcon,
    instagramIcon,
    youtubeIcon,
    riseIcon,
    fallIcon
  } = icons;

  return (
    <Section>
      <div>
        <H2>Overview - Today</H2>
      </div>
      <OverviewCardWrapper>
        <OverviewCard
          type={'Page Views'}
          count={87}
          currentStat={'3%'}
          icon={facebookIcon}
          rateIcon={riseIcon}
          rateColor={'hsl(163, 72%, 41%)'}
        />
        <OverviewCard
          type={'Likes'}
          count={52}
          currentStat={'2%'}
          icon={facebookIcon}
          rateIcon={fallIcon}
          rateColor={'hsl(356, 69%, 56%)'}
        />
        <OverviewCard
          type={'Likes'}
          count={5462}
          currentStat={'2257%'}
          icon={instagramIcon}
          rateIcon={riseIcon}
          rateColor={'hsl(163, 72%, 41%)'}
        />
        <OverviewCard
          type={'Profile Views'}
          count={'52k'}
          currentStat={'1375%'}
          icon={instagramIcon}
          rateIcon={riseIcon}
          rateColor={'hsl(163, 72%, 41%)'}
        />
        <OverviewCard
          type={'Retweets'}
          count={117}
          currentStat={'303%'}
          icon={twitterIcon}
          rateIcon={riseIcon}
          rateColor={'hsl(163, 72%, 41%)'}
        />
        <OverviewCard
          type={'Likes'}
          count={507}
          currentStat={'553%'}
          icon={twitterIcon}
          rateIcon={riseIcon}
          rateColor={'hsl(163, 72%, 41%)'}
        />
        <OverviewCard
          type={'Likes'}
          count={107}
          currentStat={'19%'}
          icon={youtubeIcon}
          rateIcon={fallIcon}
          rateColor={'hsl(356, 69%, 56%)'}
        />
        <OverviewCard
          type={'Total Views'}
          count={1407}
          currentStat={'12%'}
          icon={youtubeIcon}
          rateIcon={fallIcon}
          rateColor={'hsl(356, 69%, 56%)'}
        />
      </OverviewCardWrapper>
    </Section>
  );
};

export default OverviewCardContainer;
