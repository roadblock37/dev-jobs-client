import React, { useState} from "react";
import useLocalStorage from "use-local-storage";
import Header from "./Components/header";
import Icon from "./Components/Icons";
import MainContainer from "./Components/mainContainer";
import SearchBar from "./Components/searchBar";
import ThemeToggle from "./Components/themeToggle";
import TileContainer from "./Components/tileContainer";

function App() {
  // Theme selector needs to be made into a seperate component
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );


  const [checked, setChecked] = useState(false);

  // Function to toggle betwqeen themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  


  return (
    <div className="app" data-theme={theme}>
      <Header toggle={toggleTheme} isChecked={checked}/>
      <MainContainer />
    </div>
  );
}

export default App;
