import React from "react";
import useLocalStorage from "use-local-storage";
import SearchBar from "./Components/searchBar";
import TileContainer from "./Components/tileContainer";

function App() {
  // Theme selector needs to be made into a seperate component
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  // Function to toggle betwqeen themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} Theme
      </button>
      {/* <TileContainer /> */}
      <SearchBar/>
    </div>
  );
}

export default App;
