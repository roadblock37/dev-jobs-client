import TileContainer from "./tileContainer";
import SearchBar from "./searchBar";

const MainContainer = () => {
  return (
    <main className="main-container">
      <SearchBar />
      <TileContainer />
    </main>
  );
};

export default MainContainer;
