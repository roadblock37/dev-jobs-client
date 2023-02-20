import React from "react";
import Icon from "./Icons";
import ThemeToggle from "./themeToggle";
import {ReactComponent as Logo} from "../Images/desktop/logo.svg"


const Header = ({toggle}) => {
return (
    <div className="header">
    <div className="header-container">

    <Logo/>
        <Icon name="logo" className="logo"/>
        <ThemeToggle toggle={toggle}/>
    </div>
    </div>
);
}

export default Header;