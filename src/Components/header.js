import React from "react";
import Icon from "./Icons";
import ThemeToggle from "./themeToggle";
import {ReactComponent as Logo} from "../Images/desktop/logo.svg"


const Header = ({toggle, isChecked}) => {
return (
    <div className="header">
    <div className="header-container">

    <Logo/>
        <Icon name="logo" className="logo"/>
        <ThemeToggle toggle={toggle} isChecked={isChecked}/>
    </div>
    </div>
);
}

export default Header;