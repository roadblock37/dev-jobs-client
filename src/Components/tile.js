const Tile = ({
  logo,
  logoBackground,
  postedAt,
  contract,
  position,
  company,
  location,
}) => {
  return (
    <article className="tile">
      {/*container that hold company logo */}
      <div className="logo-container">
        <img src={logo} alt={company} />
      </div>
      {/*section holding position details */}
      <section className="position-container">
        <div className="posted-container">
          <h3>
            {postedAt} . {contract}
          </h3>
        </div>
        <h2>{position}</h2>
        <h3>{company}</h3>
      </section>
      <h5 className="location">{location}</h5>
    </article>
  );
};
export default Tile;
