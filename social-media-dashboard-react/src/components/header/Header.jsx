import React from 'react';

// import Toggle from '../toggle/Toggle';
import { HeaderBlock, Heading, Total } from './HeaderStyles';

const Header = () => (
  <HeaderBlock>
    <Heading>
      <h2>Social Media Dashboard</h2>
      <Total>Total Followers: 23,004</Total>
    </Heading>
    {/* <Toggle onClick={themeSwitcher} /> */}
  </HeaderBlock>
);

export default Header;
