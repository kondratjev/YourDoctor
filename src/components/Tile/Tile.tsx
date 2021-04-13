import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import { Container } from "./Tile.style";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Tile = (props: Props) => {
  const { style, children } = props;

  return <Container style={style}>{children}</Container>;
};

export default Tile;
