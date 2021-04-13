import React from "react";
import Svg, { Path } from "react-native-svg";

const Drop = ({ color }: { color?: string }) => {
  return (
    <Svg width={20} height={20} viewBox="-57 0 512 512">
      <Path
        fill={color || "#c1c5d0"}
        d="M327.219 119.46C295.96 69.544 247.969 8.536 215.605.872c-12.82-3.035-24.246 1.984-29.824 13.102-14.691 29.285-26.57 46.672-49.312 76.949-12.055 16.055-26.492 32.394-41.778 49.695C50.31 190.855 0 247.801 0 312.801 0 422.64 89.36 512 199.2 512c109.84 0 199.202-89.36 199.202-199.2 0-71.921-49.78-159.167-71.183-193.34zm-128.02 362.517c-93.281 0-169.176-75.895-169.176-169.176 0-53.637 44.317-103.797 87.172-152.305 15.688-17.762 30.508-34.535 43.282-51.543 23.011-30.637 35.476-48.793 50.425-78.125 4.993 2.168 15.657 9.078 32.203 26.625 18.008 19.09 37.954 45.367 56.172 73.988 43.266 67.98 69.098 135.778 69.098 181.36 0 93.281-75.89 169.176-169.176 169.176zm0 0"
      />
    </Svg>
  );
};

export default Drop;
