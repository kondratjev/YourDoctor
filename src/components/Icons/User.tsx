import React from "react";
import Svg, { Path } from "react-native-svg";

const User = ({ color }: { color?: string }) => {
  return (
    <Svg height={24} width={24} viewBox="0 0 512 512">
      <Path
        fill={color || "#c1c5d0"}
        d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
      />
    </Svg>
  );
};

export default User;
