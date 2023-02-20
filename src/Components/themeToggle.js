import React from "react";

const ThemeToggle = ({ toggle }) => {
  // TODO finish styling
  return (
    <label className="switch">
      <input type="checkbox" onChange={toggle} />
      <span className="slider round" />
    </label>
  );
};

export default ThemeToggle;
