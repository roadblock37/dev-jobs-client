import React from "react";

const ThemeToggle = ({toggle}) => {
    // TODO add theme switching functionality for onClick
    <label className="switch">
        <input type="checkbox" onChange={toggle}/>
        <span className="slider round"/>
    </label>
}

export default ThemeToggle;