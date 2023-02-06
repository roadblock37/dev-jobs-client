import React from "react";
import Filter from "./filter";
import Sun from "./sun";


const Icon = (props) => {
    switch (props.name) {
        case "sun":
            return <Sun {...props}/>;
        case "filter":
            return <Filter {...props}/>
        default:
            return;
    }
}

export default Icon;