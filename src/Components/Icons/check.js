const CheckIcon = ({
  style = {},
  fill = "none",
  width = "15",
  height = "12",
  viewBox = "0,0,15,12",
  fillRule = "evenodd",
  name,
}) => {
  <svg
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    className={`svg-icon ${name || ""}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 6.57l3.572 3.572L13.714 1"
      stroke="#FFF"
      stroke-width="2"
      fill={fill}
      fillRule={fillRule}
    />
  </svg>;
};

export default CheckIcon;
