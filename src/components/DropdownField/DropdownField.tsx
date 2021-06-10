import React, { useCallback } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import ArrowRight from "../../icons/ArrowRight";
import BottomModalField from "../BottomModalField";
import styles from "./DropdownField.styles";

type Props = {
  style?: ViewStyle;
  label: string;
  value?: string | number;
  hideLabel?: boolean;
  onAccept: () => void;
  renderIcon?: () => React.ReactNode;
};

const DropdownField: React.FC<Props> = ({
  style,
  label,
  value,
  children,
  onAccept,
  renderIcon,
}) => {
  const render = useCallback(
    ({ openDetails }) => (
      <View style={[styles.container, style]}>
        <TouchableOpacity style={styles.content} onPress={openDetails}>
          {renderIcon && renderIcon()}
          <Text style={styles.value}>{value}</Text>
          <View style={styles.icon}>
            <ArrowRight />
          </View>
        </TouchableOpacity>
      </View>
    ),
    [renderIcon, style, value],
  );

  return (
    <BottomModalField
      label={label}
      onAccept={onAccept}
      render={render}
      children={children}
    />
  );
};

export default DropdownField;
