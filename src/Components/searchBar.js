import React from "react";
import {ReactComponent as FilterIcon} from '../Images/mobile/icon-filter.svg'
import {ReactComponent as SearchIcon} from '../Images/desktop/icon-search.svg'
import Icon from "./Icons";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Filter by title..."></input>
      {/* <FilterIcon/> */}
      {/* <SearchIcon/> */}
      <Icon name="filter"/>
    </div>
  );
};

export default SearchBar;
