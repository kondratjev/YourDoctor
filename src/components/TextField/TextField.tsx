import React from "react";
import { TextInput, TextInputProps, View, ViewStyle } from "react-native";
import styles from "./TextField.styles";

type Props = {
  style?: ViewStyle;
  value: string;
} & TextInputProps;

const TextField = ({ style, value, ...props }: Props) => {
  return (
    <View style={[styles.field, style]}>
      <TextInput style={styles.fieldText} value={value} {...props} />
    </View>
  );
};

export default TextField;
