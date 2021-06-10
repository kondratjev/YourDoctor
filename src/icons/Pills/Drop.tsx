import React from "react";
import Svg, { Path } from "react-native-svg";

const Drop = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Svg height={height || 20} width={width || 20} viewBox="0 0 512 512">
      <Path
        fill={color || "#c1c5d0"}
        d="M349.414 130.314c-40.321-62.959-81.228-114.885-81.636-115.403L255.999 0l-11.778 14.912c-.408.517-41.315 52.443-81.636 115.403C107.413 216.46 79.44 281.687 79.44 324.184 79.44 427.746 158.644 512 256 512s176.56-84.254 176.56-187.816c-.001-42.497-27.974-107.724-83.146-193.87z"
      />
    </Svg>
  );
};

export default Drop;
