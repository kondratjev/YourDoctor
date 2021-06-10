import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import styles from "./Group.styles";

type Props = {
  style?: StyleProp<ViewStyle>;
  Icon: ({ color }: { color?: string | undefined }) => JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
  group: {
    name: string;
    count: number;
  };
  isLast?: boolean;
  palette: {
    color: string;
    bgColor: string;
  };
};

const Group = (props: Props) => {
  const { style, Icon, onPress, group, isLast, palette } = props;

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View
        style={[styles.iconBackground, { backgroundColor: palette.bgColor }]}>
        <Icon color={palette.color} />
      </View>
      <View
        style={
          isLast ? styles.content : [styles.content, styles.contentBorder]
        }>
        <Text style={styles.name}>{group.name}</Text>
        <Text style={styles.description}>{group.count} лекарства</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Group;
