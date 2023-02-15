import React, { useContext, useState } from "react";
import useLocalStorage from "use-local-storage";
import SearchBar from "./Components/searchBar";
import ThemeToggle from "./Components/themeToggle";
import TileContainer from "./Components/tileContainer";
import ThemeContext from "./Context/themeContext";

function App() {
  // Theme selector needs to be made into a seperate component
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  // Function to toggle betwqeen themes
  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };

  return (
    <ThemeContext.Provider value={theme}>
    <div className={theme}>

        <input
          type="checkbox"
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        {/* <TileContainer /> */}
        <SearchBar />
        {/* <ThemeToggle/> */}
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
