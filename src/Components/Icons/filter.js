const Filter = ({
  style = {},
  width = "20",
  height = "20",
  viewBox = "0,0,20,20",
  fill = "#6E8098",
  fillRule = "nonzero",
  className = "",
  name
}) => {
  return (
    <svg
      style={style}
      width={width}
      height={height}
      viewBox={viewBox}
      className = {`svg-icon ${name || ""}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
        fill={fill}
        fillRule={fillRule}
      />
    </svg>
  );
};

export default Filter;
