import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";

import DropdownField from "../../../components/DropdownField";

import styles from "./PickerField.styles";
import FieldControl from "../../../components/FieldControl";

type Props = {
  label: string;
  value: string | number;
  items: { label: string; value: string | number }[];
  onAccept: (newValue: string | number) => void;
};

const PickerField = ({ label, value, items, onAccept }: Props) => {
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const accept = useCallback(() => {
    onAccept(tempValue);
  }, [onAccept, tempValue]);

  const changeTempValue = useCallback((newValue: string | number) => {
    setTempValue(newValue);
  }, []);

  const formattedValue = useMemo(() => {
    return items.find((item) => item.value === value)?.label ?? value;
  }, [items, value]);

  return (
    <FieldControl label={label}>
      <DropdownField label={label} value={formattedValue} onAccept={accept}>
        <View style={styles.container} onStartShouldSetResponder={() => true}>
          <Picker selectedValue={tempValue} onValueChange={changeTempValue}>
            {items.map((item) => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>
      </DropdownField>
    </FieldControl>
  );
};

export default PickerField;
