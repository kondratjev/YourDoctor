import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Powder = ({
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
      viewBox="0 0 496.975 496.975">
      <Circle fill={color || "#c1c5d0"} cx={76.821} cy={375.054} r={15} />
      <Circle fill={color || "#c1c5d0"} cx={76.821} cy={435.15} r={15} />
      <Circle fill={color || "#c1c5d0"} cx={32.83} cy={479.145} r={15} />
      <Circle fill={color || "#c1c5d0"} cx={136.921} cy={435.154} r={15} />
      <Circle fill={color || "#c1c5d0"} cx={15} cy={405.104} r={15} />
      <Circle fill={color || "#c1c5d0"} cx={106.871} cy={496.975} r={15} />
    </Svg>
  );
};

export default Powder;
