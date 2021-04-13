import React from "react";
import Svg, { Path } from "react-native-svg";

const Folder = ({ color }: { color?: string }) => {
  return (
    <Svg height={20} width={20} viewBox="0 0 408 408">
      <Path
        fill={color || "#c1c5d0"}
        d="M372 88.661H206.32l-33-39.24a5.001 5.001 0 00-4-1.8H36c-19.956.198-36.023 16.443-36 36.4v240c-.001 19.941 16.06 36.163 36 36.36h336c19.94-.197 36.001-16.419 36-36.36v-199c.001-19.941-16.06-36.162-36-36.36z"
      />
    </Svg>
  );
};

export default Folder;
