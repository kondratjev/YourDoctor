import React from "react";
import Svg, { Path } from "react-native-svg";

const Syrop = ({
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
        d="M479.362 32.635C429.793-16.934 341.637-9.152 282.468 50.017c-48.105 48.105-62.233 115.378-39.175 165.5L15.219 410.216c-21.15 24.132-20.275 60.81 2.749 83.82 23.003 23.01 59.689 23.892 83.82 2.749L296.479 268.71c50.115 23.058 117.395 8.938 165.508-39.175 59.175-59.162 66.951-147.317 17.375-196.9z"
      />
    </Svg>
  );
};

export default Syrop;
