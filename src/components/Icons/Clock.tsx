import React from "react";
import Svg, { Path } from "react-native-svg";

const Clock = ({ color }: { color?: string }) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 512 512">
      <Path
        fill={color || "#c1c5d0"}
        d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm121.75 388.414a21.277 21.277 0 01-15.082 6.254 21.27 21.27 0 01-15.082-6.254L240.918 281.75a21.237 21.237 0 01-6.25-15.082V128c0-11.797 9.555-21.332 21.332-21.332s21.332 9.535 21.332 21.332v129.836L377.75 358.25c8.34 8.344 8.34 21.824 0 30.164zm0 0"
      />
    </Svg>
  );
};

export default Clock;
