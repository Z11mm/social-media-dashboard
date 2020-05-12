import React from 'react';
import OverviewCard from './OverviewCard';

import icons from '../icons';

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
    <section>
      <div>
        <h2>Overview - Today</h2>
      </div>
      <div>
        <OverviewCard
          type={'Page Views'}
          count={87}
          currentStat={'3%'}
          icon={facebookIcon}
          rateIcon={riseIcon}
        />
        <OverviewCard
          type={'Likes'}
          count={52}
          currentStat={'2%'}
          icon={facebookIcon}
          rateIcon={fallIcon}
        />
        <OverviewCard
          type={'Likes'}
          count={5462}
          currentStat={'2257%'}
          icon={instagramIcon}
          rateIcon={riseIcon}
        />
        <OverviewCard
          type={'Profile Views'}
          count={'52k'}
          currentStat={'1375%'}
          icon={instagramIcon}
          rateIcon={riseIcon}
        />
        <OverviewCard
          type={'Retweets'}
          count={117}
          currentStat={'303%'}
          icon={twitterIcon}
          rateIcon={riseIcon}
        />
        <OverviewCard
          type={'Likes'}
          count={507}
          currentStat={'553%'}
          icon={twitterIcon}
          rateIcon={riseIcon}
        />
        <OverviewCard
          type={'Likes'}
          count={107}
          currentStat={'19%'}
          icon={youtubeIcon}
          rateIcon={fallIcon}
        />
        <OverviewCard
          type={'Total Views'}
          count={1407}
          currentStat={'12%'}
          icon={youtubeIcon}
          rateIcon={fallIcon}
        />
      </div>
    </section>
  );
};

export default OverviewCardContainer;
