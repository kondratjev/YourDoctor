import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const List = ({ color }: { color?: string }) => {
  return (
    <Svg height={24} width={24} viewBox="0 0 24 24">
      <Circle fill={color || "#c1c5d0"} cx={2} cy={4} r={2} />
      <Circle fill={color || "#c1c5d0"} cx={2} cy={12} r={2} />
      <Circle fill={color || "#c1c5d0"} cx={2} cy={20} r={2} />
      <Path
        fill={color || "#c1c5d0"}
        d="M8 5h15a1 1 0 100-2H8a1 1 0 100 2zM23 11H8a1 1 0 100 2h15a1 1 0 100-2zM23 19H8a1 1 0 100 2h15a1 1 0 100-2z"
      />
    </Svg>
  );
};

export default List;
