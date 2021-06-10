import React from "react";
import Svg, { Path } from "react-native-svg";

const Inhaler = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Svg
      height={height || 20}
      width={width || 20}
      viewBox="0 0 206.084 206.084">
      <Path
        fill={color || "#c1c5d0"}
        d="M162.564 19.009C145.107 6.603 124.504.046 102.981.046c-27.508 0-53.369 10.712-72.819 30.163C12.85 47.521 2.253 70.477.322 94.85c-1.908 24.096 4.711 48.16 18.64 67.761l3.771 5.305L167.869 22.78l-5.305-3.771zM187.174 43.683l-3.766-5.33L38.304 183.458l5.33 3.768c17.407 12.303 37.935 18.812 59.362 18.812h.008c27.502 0 53.363-10.716 72.813-30.167 35.572-35.571 40.348-91.167 11.357-132.188z"
      />
    </Svg>
  );
};

export default Inhaler;
