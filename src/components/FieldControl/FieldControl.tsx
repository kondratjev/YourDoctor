import React from "react";
import { Text, View, ViewStyle } from "react-native";
import styles from "./FieldControl.styles";

type Props = {
  style?: ViewStyle;
  label: string;
};

const FieldControl: React.FC<Props> = ({ style, label, children }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
};

export default FieldControl;
