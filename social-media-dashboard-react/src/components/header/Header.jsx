import React from 'react';

const Header = () => (
  <header>
    <div>
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: 23,004</p>
    </div>
    <div>
      <span>Dark Mode</span>
        <label for="toggle-switch" class="toggle-switch" aria-label="toggle-switch">
          <input id="toggle-switch" type="checkbox" />
          <span class="slider round"></span>
        </label> 
    </div>
  </header>
);

export default Header;
