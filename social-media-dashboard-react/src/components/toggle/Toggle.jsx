import React from 'react';

import { ToggleWrapper, Label, Checkbox, Slider } from './ToggleStyles';

const Toggle = () => (
  <ToggleWrapper>
    <span>Dark Mode</span>
    <Label
      htmlFor='toggle-switch'
      aria-label='toggle-switch'
    >
      <Checkbox id='toggle-switch' type='checkbox' />
      <Slider className='slider round'></Slider>
    </Label>
  </ToggleWrapper>
);

export default Toggle;
