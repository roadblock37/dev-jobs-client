import React from "react";
import Icon from "./Icons";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Filter by title..."></input>
      <Icon name="filter" className="filter"/>
    </div>
  );
};

export default SearchBar;
