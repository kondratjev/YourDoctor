import React from "react";
import Svg, { Path } from "react-native-svg";

const Ampoule = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Svg height={height || 20} width={width || 20} viewBox="-61 0 512 512">
      <Path
        fill={color || "#c1c5d0"}
        d="M77.293 215.23a15 15 0 01.617-17.113l8.653-11.531a15.015 15.015 0 002.94-10.305L76.657 28.687C75.398 11.895 61.711 0 45.062 0c-16.851 0-30.09 11.934-31.707 28.684L.496 176.28c-.316 3.68.73 7.348 2.945 10.305l8.649 11.531a15 15 0 01.617 17.113L2.383 231.293A15 15 0 000 239.403v57.593h90v-57.594c0-2.875-.824-5.691-2.383-8.109zm0 0M0 497c0 8.285 6.715 15 15 15h60c8.285 0 15-6.715 15-15V326.996H0zm0 0M227.293 215.23a15.007 15.007 0 01.621-17.113l8.649-11.531a14.995 14.995 0 002.94-10.305L226.657 28.687C225.402 11.895 211.715 0 195.062 0c-16.847 0-30.09 11.934-31.707 28.684L150.5 176.28c-.32 3.68.727 7.348 2.941 10.305l8.653 11.531a15.013 15.013 0 01.617 17.113l-10.328 16.063a15 15 0 00-2.383 8.11v57.593h90.004v-57.594a15 15 0 00-2.383-8.109zm0 0M150 497c0 8.285 6.719 15 15 15h60.004c8.281 0 15-6.715 15-15V326.996H150zm0 0M387.621 231.29l-10.324-16.063a14.993 14.993 0 01.617-17.11l8.652-11.535a15 15 0 002.942-10.3L376.66 28.686C375.402 11.895 361.715 0 345.066 0c-16.851 0-30.09 11.934-31.71 28.684L300.5 176.28c-.32 3.68.73 7.348 2.945 10.305l8.649 11.531a15 15 0 01.617 17.113l-10.324 16.063a15 15 0 00-2.383 8.11v57.593h90v-57.594c0-2.875-.828-5.691-2.383-8.113zm0 0M300.004 497c0 8.285 6.715 15 15 15h60c8.285 0 15-6.715 15-15V326.996h-90zm0 0"
      />
    </Svg>
  );
};

export default Ampoule;