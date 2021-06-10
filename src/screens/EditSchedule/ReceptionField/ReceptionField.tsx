import SegmentedControl, {
  NativeSegmentedControlIOSChangeEvent,
} from "@react-native-community/segmented-control";
import { Picker } from "@react-native-picker/picker";
import { format } from "date-fns";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DatePicker from "react-native-date-picker";
import BottomModalField from "../../../components/BottomModalField";
import { getWordForm } from "../../../utils/format";
import styles from "./ReceptionField.styles";

enum SWITCH {
  TIME,
  DOSE,
}

type Value = {
  time: Date;
  dose: number;
};

type Props = {
  label: string;
  value: Value;
  onAccept: (newValue: Value) => void;
  onRemove: () => void;
};

const ReceptionField = ({ label, value, onAccept, onRemove }: Props) => {
  const [index, setIndex] = useState(SWITCH.TIME);
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const accept = useCallback(() => {
    onAccept(tempValue);
  }, [onAccept, tempValue]);

  type ChangeIndexType =
    NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>;
  const changeIndex = useCallback((event: ChangeIndexType) => {
    setIndex(event.nativeEvent.selectedSegmentIndex);
  }, []);

  const changeTime = useCallback((time) => {
    setTempValue((temp) => ({ ...temp, time }));
  }, []);

  const changeDose = useCallback((dose) => {
    setTempValue((temp) => ({ ...temp, dose }));
  }, []);

  const doses = useMemo(() => {
    return [
      { label: "0.5 — 10 мг", value: 0.5 },
      { label: "1 — 20 мг", value: 1 },
    ];
  }, []);

  const renderField = useCallback(
    ({ openDetails }: { openDetails: () => void }) => {
      return (
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#e4e5e8",
            borderBottomWidth: 1,
            marginBottom: 15,
            paddingBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              width: 22,
              height: 22,
              borderRadius: 11,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={onRemove}>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                lineHeight: 21,
              }}>
              -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", flex: 1 }}
            onPress={openDetails}>
            <Text style={{ fontSize: 16, marginLeft: 15 }}>
              {value.dose}{" "}
              {getWordForm(value.dose, ["таблетка", "таблетки", "таблеток"])}
            </Text>
            <Text style={{ fontSize: 16, marginLeft: "auto" }}>
              {format(value.time, "HH:mm")}
            </Text>
          </TouchableOpacity>
        </View>
      );
    },
    [onRemove, value.dose, value.time],
  );

  return (
    <BottomModalField label={label} onAccept={accept} render={renderField}>
      <View style={styles.content}>
        <SegmentedControl
          values={["Время", "Доза"]}
          selectedIndex={index}
          onChange={changeIndex}
        />
        <View style={styles.wrapper}>
          {index === SWITCH.TIME && (
            <DatePicker
              date={tempValue.time}
              onDateChange={changeTime}
              mode="time"
              locale="ru"
            />
          )}

          {index === SWITCH.DOSE && (
            <View style={styles.picker} onStartShouldSetResponder={() => true}>
              <Picker selectedValue={tempValue.dose} onValueChange={changeDose}>
                {doses.map((item) => (
                  <Picker.Item
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>
          )}
        </View>
      </View>
    </BottomModalField>
  );
};

export default ReceptionField;
