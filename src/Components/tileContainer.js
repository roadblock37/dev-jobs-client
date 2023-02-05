import Tile from "./tile";
import Data from "../data";
const TileContainer = () => {
  return (
    <section className="tile-grid">
      {Data.map((job) => {
        return <Tile key={job.id} {...job} />;
      })}
    </section>
  );
};
export default TileContainer;
