import React from "react";
import Icon from "./Icons";

const SearchBar = () => {
  // TODO 
  // add other input fields for search functionality
  return (
    <div className="search-container">
      <input type="text" placeholder="Filter by title..."></input>
      <Icon name="filter" className="filter"/>
    </div>
  );
};

export default SearchBar;
