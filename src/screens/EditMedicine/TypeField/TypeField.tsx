import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ProgressCircle from "react-native-progress-circle";

import Check from "../../../icons/Check";

import DropdownField from "../../../components/DropdownField";

import { TYPES } from "../../../constants";

import styles from "./TypeField.styles";
import ArrowRight from "../../../icons/ArrowRight";
import FieldControl from "../../../components/FieldControl";

type Props = {
  label: string;
  value: number;
  palette: {
    color: string;
    bgColor: string;
  };
  onAccept: (newType: number) => void;
};

const TypeField = ({ label, value, palette, onAccept }: Props) => {
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const accept = useCallback(() => {
    onAccept(tempValue);
  }, [onAccept, tempValue]);

  const selectType = useCallback(
    (item: { label: string; value: number }) => () => {
      setTempValue(item.value);
    },
    [],
  );

  const formattedValue = useMemo(() => {
    return TYPES.find((item) => item.value === value)!;
  }, [value]);

  return (
    <FieldControl label={label}>
      <DropdownField
        label={label}
        value={formattedValue?.label}
        onAccept={accept}
        renderIcon={() => (
          <ProgressCircle
            outerCircleStyle={{ marginRight: 10 }}
            percent={0}
            radius={16}
            borderWidth={2}
            color={palette.color}
            shadowColor={palette.bgColor}
            bgColor={palette.bgColor}>
            <formattedValue.Icon color={palette.color} width={14} height={14} />
          </ProgressCircle>
        )}>
        <ScrollView style={styles.content}>
          {TYPES.map((type) => (
            <TouchableOpacity
              key={type.value}
              style={styles.item}
              onPress={selectType(type)}>
              <ProgressCircle
                percent={0}
                radius={18}
                borderWidth={2}
                color={palette.color}
                shadowColor={palette.bgColor}
                bgColor={palette.bgColor}>
                <type.Icon color={palette.color} width={16} height={16} />
              </ProgressCircle>
              <Text style={styles.itemLabel}>{type.label}</Text>
              {type.value === tempValue && (
                <View style={styles.itemIcon}>
                  <Check color="#177ceb" width={18} height={18} />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </DropdownField>
    </FieldControl>
  );
};

export default TypeField;
