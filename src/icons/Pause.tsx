import React from "react";
import Svg, { Path } from "react-native-svg";

const Pause = ({ color }: { color?: string }) => {
  return (
    <Svg height={20} width={20} viewBox="0 0 224.075 224.075">
      <Path
        fill={color || "#feb741"}
        d="M160.738 0c-7.9 0-14.2 6.3-13.7 14.2v195.7c-.5 18.9 28.5 18.9 28 0V14.2c0-7.9-6.3-14.2-14.3-14.2zM62.738 0c-7.4 0-13.7 6.3-13.7 14.2v195.7c-.5 18.9 28.5 18.9 28 0V14.2c.5-7.9-6.4-14.2-14.3-14.2z"
      />
    </Svg>
  );
};

export default Pause;
