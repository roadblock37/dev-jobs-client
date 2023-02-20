import React, { useState } from "react";

import Icon from "./Icons";
import { ReactComponent as Search } from "../Images/desktop/icon-search.svg";

const SearchBar = () => {
  const [text, setText] = useState();
  // TODO
  // add other input fields for search functionality
  // setup input fields to send typed text as query
  return (
    <div className="search-container">
      <input type="text" placeholder="Filter by title..." onChange={setText}>
        {text}
      </input>
      <Icon name="filter" className="filter" />
      <div className="search-icon">
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
