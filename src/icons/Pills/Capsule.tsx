import React from "react";
import Svg, { Path } from "react-native-svg";

const Capsule = ({
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
      viewBox="0 0 380.738 380.739">
      <Path
        fill={color || "#c1c5d0"}
        d="M345.698 35.031C302.871-7.818 237.54-11.92 199.79 25.829L96.977 128.655l-71.141 71.129c-37.75 37.761-33.637 103.082 9.19 145.943 42.838 42.826 108.17 46.928 145.919 9.189l71.129-71.141 102.825-102.814c37.761-37.76 33.637-103.091-9.201-145.93zM162.61 336.559c-27.583 27.583-76.578 23.447-109.227-9.19-32.637-32.648-36.773-81.633-9.19-109.228l71.129-71.129L233.74 265.43l-71.13 71.129z"
      />
    </Svg>
  );
};

export default Capsule;
