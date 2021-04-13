import React from "react";
import Svg, { Path } from "react-native-svg";

const Cross = ({ color }: { color?: string }) => {
  return (
    <Svg height={20} width={20} viewBox="0 0 22.88 22.88">
      <Path
        fill={color || "#ff5d4e"}
        d="M.324 1.909a1.14 1.14 0 010-1.587 1.14 1.14 0 011.587 0l9.523 9.539L20.973.322a1.12 1.12 0 011.571 0 1.112 1.112 0 010 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 010 1.587 1.12 1.12 0 01-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 01-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"
      />
    </Svg>
  );
};

export default Cross;
