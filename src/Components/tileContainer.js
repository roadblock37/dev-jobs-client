import Tile from "./tile";
import { useSelector } from "react-redux";
import Data from "../data";
const TileContainer = () => {
  const { defaultState } = useSelector((store) => store.jobs);
  return (
    <section className="tile-grid">
      {Data.map((job) => {
        return <Tile key={job.id} {...job} />;
      })}
    </section>
  );
};
export default TileContainer;
