import React from "react";
import Svg, { Circle } from "react-native-svg";

const More = ({ color }: { color?: string }) => {
  return (
    <Svg height={24} width={24} viewBox="0 0 426.667 426.667">
      <Circle fill={color || "#c1c5d0"} cx={42.667} cy={213.333} r={42.667} />
      <Circle fill={color || "#c1c5d0"} cx={213.333} cy={213.333} r={42.667} />
      <Circle fill={color || "#c1c5d0"} cx={384} cy={213.333} r={42.667} />
    </Svg>
  );
};

export default More;
