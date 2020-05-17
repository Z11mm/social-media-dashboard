import React from 'react';

import { Label, Checkbox, Slider } from './ToggleStyles';

const Toggle = () => (
  <div>
    <span>Dark Mode</span>
    <Label
      htmlFor='toggle-switch'
      aria-label='toggle-switch'
    >
      <Checkbox id='toggle-switch' type='checkbox' />
      <Slider className='slider round'></Slider>
    </Label>
  </div>
);

export default Toggle;
