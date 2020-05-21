import React from 'react';

import { ToggleWrapper, Label, Checkbox, Slider } from './ToggleStyles';

const Toggle = ({ themeSwitch }) => (
  <ToggleWrapper>
    <span>Dark Mode</span>
    <Label htmlFor='toggle-switch' aria-label='toggle-switch'>
      <Checkbox onClick={themeSwitch} id='toggle-switch' type='checkbox' />
      <Slider className='slider round'></Slider>
    </Label>
  </ToggleWrapper>
);

export default Toggle;
