import React from 'react'
import useDarkMode from 'use-dark-mode'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
        <div class="container">
          <label id="switch" class="switch">
            <input type="checkbox" checked={darkMode.value} onChange={darkMode.toggle} id="slider" />
            <span class="slider round"></span>
          </label>
      </div>
    </div>
  );
};

export default DarkModeToggle;