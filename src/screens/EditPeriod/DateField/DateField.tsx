import { format } from "date-fns";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import DatePicker from "react-native-date-picker";
import DropdownField from "../../../components/DropdownField";
import FieldControl from "../../../components/FieldControl";
import styles from "./DateField.styles";

type Props = {
  label: string;
  value: Date;
  minimumDate?: Date;
  onAccept: (newValue: Date) => void;
};

const DateField = ({ label, value, minimumDate, onAccept }: Props) => {
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const accept = useCallback(() => {
    onAccept(tempValue);
  }, [onAccept, tempValue]);

  const changeTempValue = useCallback((newValue: Date) => {
    setTempValue(newValue);
  }, []);

  const formattedValue = useMemo(() => {
    return format(value, "dd MMM yyyy");
  }, [value]);

  return (
    <FieldControl label={label}>
      <DropdownField label={label} value={formattedValue} onAccept={accept}>
        <View style={styles.content}>
          <DatePicker
            date={tempValue}
            onDateChange={changeTempValue}
            mode="date"
            locale="ru"
            minimumDate={minimumDate}
          />
        </View>
      </DropdownField>
    </FieldControl>
  );
};

export default DateField;
