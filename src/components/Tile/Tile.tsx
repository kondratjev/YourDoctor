import React from "react";
import { Text, View, ViewStyle } from "react-native";
import styles from "./Tile.styles";

type Props = {
  style?: ViewStyle;
  title: string;
  children: React.ReactNode;
};

const Tile = (props: Props) => {
  const { style, title, children } = props;

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.content, style]}>{children}</View>
    </View>
  );
};

export default Tile;
