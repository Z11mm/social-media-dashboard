import React from 'react'
import OverviewCard from './OverviewCard'

const OverviewCardContainer = () => (
  <section>
    <div>
      <h2>Overview - Today</h2>
    </div>
    <div>
      <OverviewCard type={'Page Views'} count={87} currentStat={'3%'} />
      <OverviewCard type={'Likes'} count={52} currentStat={'2%'} />
      <OverviewCard type={'Likes'} count={5462} currentStat={'2257%'} />
      <OverviewCard type={'Profile Views'} count={'52k'} currentStat={'1375%'} />
      <OverviewCard type={'Retweets'} count={117} currentStat={'303%'} />
      <OverviewCard type={'Likes'} count={507} currentStat={'553%'} />
      <OverviewCard type={'Likes'} count={107} currentStat={'19%'} />
      <OverviewCard type={'Total Views'} count={1407} currentStat={'12%'} />
    </div>
  </section>
);

export default OverviewCardContainer;