import React from "react";
import CheckIcon from "./check";
import Filter from "./filter";
import LocationIcon from "./location";
import Sun from "./sun";


const Icon = (props) => {
    switch (props.name) {
        case "sun":
            return <Sun {...props}/>;
        case "filter":
            return <Filter {...props}/>;
        case "check":
            return <CheckIcon {...props}/>;
        case "location":
            return <LocationIcon {...props}/>;
        default:
            return;
    }
}

export default Icon;