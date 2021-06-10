import { Picker } from "@react-native-picker/picker";
import React, { useCallback, useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import DropdownField from "../../../components/DropdownField";
import FieldControl from "../../../components/FieldControl";
import { UNITS } from "../../../constants";
import styles from "./DoseField.styles";

type Value = {
  count: number;
  units: string;
};

type Props = {
  label: string;
  value: Value;
  onAccept: (newValue: Value) => void;
};

const ScreenField: React.FC<Props> = ({ label, value, onAccept }) => {
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const accept = useCallback(() => {
    onAccept(tempValue);
  }, [onAccept, tempValue]);

  const changeCount = useCallback((count) => {
    setTempValue((temp) => ({ ...temp, count }));
  }, []);

  const changeUnit = useCallback((units) => {
    setTempValue((temp) => ({ ...temp, units }));
  }, []);

  return (
    <FieldControl label={label}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.input}
          value={`${tempValue.count}`}
          onChangeText={changeCount}
        />
        <DropdownField
          style={{ flex: 0.25 }}
          label={label}
          value={value.units}
          onAccept={accept}
          hideLabel>
          <View style={styles.content}>
            <View style={styles.picker} onStartShouldSetResponder={() => true}>
              <Picker
                selectedValue={tempValue.units}
                onValueChange={changeUnit}>
                {UNITS.map((item) => (
                  <Picker.Item
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </DropdownField>
      </View>
    </FieldControl>
  );
};

export default ScreenField;
