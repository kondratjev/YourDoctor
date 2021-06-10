import React from "react";
import Svg, { Path } from "react-native-svg";

const Suppositorie = ({
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
        d="M256 153.345c-14.334 9.607-47.583 38.781-47.583 102.655 0 48.764 18.975 106.535 36.398 149.298h22.369c17.424-42.763 36.398-100.534 36.398-149.298.001-63.874-33.248-93.048-47.582-102.655z"
      />
      <Path
        fill={color || "#c1c5d0"}
        d="M376.95 60c-24.813 0-45-20.187-45-45 0-8.284-6.716-15-15-15h-121.9c-8.284 0-15 6.716-15 15 0 24.813-20.187 45-45 45-8.284 0-15 6.716-15 15v422c0 8.284 6.716 15 15 15h241.9c8.284 0 15-6.716 15-15V75c0-8.284-6.716-15-15-15zm-85.933 366.137a15 15 0 01-13.817 9.161h-42.398a14.999 14.999 0 01-13.817-9.161c-37.459-88.646-69.275-200.794-7.756-273.962 17.302-20.579 34.576-28.912 36.488-29.794a14.997 14.997 0 0112.568 0c1.912.882 19.187 9.215 36.488 29.794 61.635 73.307 29.643 185.457-7.756 273.962z"
      />
    </Svg>
  );
};

export default Suppositorie;
