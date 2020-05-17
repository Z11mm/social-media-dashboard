import React from 'react';

import Toggle from '../toggle/Toggle';
import { HeaderBlock, Heading } from './HeaderStyles';

const Header = () => (
  <HeaderBlock>
    <Heading>
      <h2>Social Media Dashboard</h2>
      <p>Total Followers: 23,004</p>
    </Heading>
    <Toggle />
  </HeaderBlock>
);

export default Header;
