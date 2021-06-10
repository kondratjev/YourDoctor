import React from "react";
import Svg, { Path } from "react-native-svg";

const Inhaler = ({
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
        d="M301.479 317.254V106.078c0-8.349-6.769-15.118-15.118-15.118H104.188c-8.349 0-15.118 6.769-15.118 15.118v354.519a15.12 15.12 0 0013.128 14.987l197.943 26.283 38.691-175.313zM411.462 344.636l-43.279-10.775-37.959 172 45.234 6.006c.673.089 1.343.133 2.005.133 6.995 0 13.203-4.858 14.748-11.862l30.362-137.574c1.765-7.999-3.163-15.949-11.111-17.928zM271.117 15.118C271.117 6.769 264.348 0 255.999 0H134.55c-8.349 0-15.118 6.769-15.118 15.118v45.606h151.685z"
      />
    </Svg>
  );
};

export default Inhaler;
