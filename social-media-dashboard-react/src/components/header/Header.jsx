import React from 'react';

// import Toggle from '../toggle/Toggle';
import { HeaderBlock, Heading, Total } from './HeaderStyles';

const Header = ({themeSwitch}) => (
  <HeaderBlock>
    <Heading>
      <h2>Social Media Dashboard</h2>
      <Total>Total Followers: 23,004</Total>
    </Heading>
    {/* <Toggle themeswitch={themeSwitcher} /> */}
  </HeaderBlock>
);

export default Header;
