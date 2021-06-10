import { addDays, format, startOfWeek } from "date-fns";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Check from "../../../icons/Check";

import DropdownField from "../../../components/DropdownField";

import styles from "./DaysField.styles";
import FieldControl from "../../../components/FieldControl";

type Props = {
  label: string;
  values: number[];
  onAccept: (newDays: number[]) => void;
};

const DaysField = ({ label, values, onAccept }: Props) => {
  const [tempValues, setTempValues] = useState(values);

  useEffect(() => {
    setTempValues(values);
  }, [values]);

  const accept = useCallback(() => {
    onAccept(tempValues);
  }, [onAccept, tempValues]);

  const selectDay = useCallback(
    (item: { label: string; value: number }) => () => {
      if (tempValues.some((temp) => temp === item.value)) {
        const newTempValue = tempValues.filter((temp) => temp !== item.value);
        setTempValues(newTempValue);
      } else {
        setTempValues([...tempValues, item.value].sort((a, b) => a - b));
      }
    },
    [tempValues],
  );

  const getWeekDays = useCallback((type: string = "EEEE") => {
    const firstDOW = startOfWeek(new Date());
    return Array(7)
      .fill(null)
      .map((_, index) => {
        const label = format(addDays(firstDOW, index), type);
        return {
          label: label[0].toUpperCase() + label.slice(1),
          value: index,
        };
      });
  }, []);

  const formattedValue = useMemo(() => {
    const weekDays = getWeekDays("EEEEEE");
    return values.map((item) => weekDays[item].label).join(", ");
  }, [getWeekDays, values]);

  return (
    <FieldControl label={label}>
      <DropdownField label={label} value={formattedValue} onAccept={accept}>
        <View style={styles.content}>
          {getWeekDays().map((item) => (
            <TouchableOpacity
              key={item.value}
              style={styles.item}
              onPress={selectDay(item)}>
              <Text style={styles.itemLabel}>{item.label}</Text>
              {tempValues.some((temp) => temp === item.value) && (
                <Check color="#177ceb" width={18} height={18} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </DropdownField>
    </FieldControl>
  );
};

export default DaysField;
