import React from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import ProgressCircle from "react-native-progress-circle";
import styles from "./Medicine.styles";

type Props = {
  style?: ViewStyle;
  percent?: number;
  Icon: ({ color }: { color?: string | undefined }) => JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
  name: string;
  description: string;
  time?: string;
  isLast?: boolean;
  palette: {
    color: string;
    bgColor: string;
  };
};

const Medicine = (props: Props) => {
  const {
    style,
    Icon,
    onPress,
    percent = 0,
    name,
    description,
    time,
    isLast,
    palette,
  } = props;

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <ProgressCircle
        percent={percent}
        radius={25}
        borderWidth={2}
        color={palette.color}
        shadowColor={palette.bgColor}
        bgColor={palette.bgColor}>
        <Icon color={palette.color} />
      </ProgressCircle>
      <View
        style={
          isLast ? styles.content : [styles.content, styles.contentBorder]
        }>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        {time && <Text style={styles.time}>{time}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default Medicine;
