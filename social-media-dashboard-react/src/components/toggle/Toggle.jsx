import React from 'react';

const Toggle = () => (
  <div>
    <span>Dark Mode</span>
    <label for='toggle-switch' class='toggle-switch' aria-label='toggle-switch'>
      <input id='toggle-switch' type='checkbox' />
      <span class='slider round'></span>
    </label>
  </div>
);

export default Toggle;
