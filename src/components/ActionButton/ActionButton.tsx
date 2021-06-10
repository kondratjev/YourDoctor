import React from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import styles from "./ActionButton.styles";

type Props = {
  style?: ViewStyle;
  Icon: ({ color }: { color?: string | undefined }) => JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
  label: string;
};

const ActionButton = (props: Props) => {
  const { style, Icon, onPress, label } = props;

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
