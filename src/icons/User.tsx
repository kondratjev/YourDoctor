import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const User = ({ color }: { color?: string }) => {
  return (
    <Svg height={24} width={24} viewBox="0 0 512 512">
      <Circle fill={color || "#c1c5d0"} cx={256} cy={114.526} r={114.526} />
      <Path
        fill={color || "#c1c5d0"}
        d="M256 256c-111.619 0-202.105 90.487-202.105 202.105 0 29.765 24.13 53.895 53.895 53.895h296.421c29.765 0 53.895-24.13 53.895-53.895C458.105 346.487 367.619 256 256 256z"
      />
    </Svg>
  );
};

export default User;
