import React from "react";
import CheckIcon from "./check";
import Filter from "./filter";
import LocationIcon from "./location";
import Logo from "./logo";
import MoonIcon from "./moon";
import SearchIcon from "./search";
import Sun from "./sun";

const Icon = (props) => {
  switch (props.name) {
    case "sun":
      return <Sun {...props} />;
    case "filter":
      return <Filter {...props} />;
    case "check":
      return <CheckIcon {...props} />;
    case "location":
      return <LocationIcon {...props} />;
    case "moon":
      return <MoonIcon {...props} />;
    case "search":
      return <SearchIcon {...props} />;
      case "logo":
        return <Logo {...props}/>;
    default:
      return;
  }
};

export default Icon;
