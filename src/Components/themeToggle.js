import React from "react";
import { ReactComponent as Sun } from "../Images/desktop/icon-sun.svg";
import { ReactComponent as Moon } from "../Images/desktop/icon-moon.svg";

const ThemeToggle = ({ toggle }) => {
  // TODO finish styling
  //   TODO fix toggle location on refresh so icons are in the correct place
  return (
    <div className="toggle-container">
      <Sun />
      <label className="switch">
        <input type="checkbox" onChange={toggle} />
        <span className="slider round" />
      </label>
      <Moon />
    </div>
  );
};

export default ThemeToggle;
