import SegmentedControl, {
  NativeSegmentedControlIOSChangeEvent,
} from "@react-native-community/segmented-control";
import { useNavigation } from "@react-navigation/core";
import { addDays, differenceInDays, format, startOfDay } from "date-fns";
import React, { useCallback, useState } from "react";
import {
  Button,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  View,
} from "react-native";
import FieldControl from "../../components/FieldControl";
import TextField from "../../components/TextField";
import Tile from "../../components/Tile";
import { getWordForm } from "../../utils/format";
import DateField from "./DateField";
import styles from "./EditPeriod.styles";

enum SWITCH {
  DATE,
  DAYS,
  NO,
}

const EditPeriod = ({ route }) => {
  const { value, onAccept } = route.params;
  const navigation = useNavigation();
  const [index, setIndex] = useState(SWITCH.DATE);
  const [tempValue, setTempValue] = useState(value);

  type ChangeIndexType =
    NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>;
  const changeIndex = useCallback((event: ChangeIndexType) => {
    setIndex(event.nativeEvent.selectedSegmentIndex);
  }, []);

  const accept = useCallback(() => {
    onAccept(tempValue);
    navigation.goBack();
  }, [navigation, onAccept, tempValue]);

  return (
    <ScrollView>
      <Tile title="Период приема" style={styles.tile}>
        <SegmentedControl
          values={["Дата", "Дни", "Не важно"]}
          selectedIndex={index}
          onChange={changeIndex}
          style={{ marginBottom: 20 }}
        />

        <DateField
          minimumDate={new Date()}
          label="Дата начала"
          value={tempValue.startDate}
          onAccept={(startDate) =>
            setTempValue((oldTempValue) => ({ ...oldTempValue, startDate }))
          }
        />

        {index !== SWITCH.NO && (
          <>
            {index === SWITCH.DATE && (
              <>
                <DateField
                  minimumDate={addDays(new Date(), 1)}
                  label="Дата окончания"
                  value={tempValue.endDate}
                  onAccept={(endDate) => {
                    const days = differenceInDays(
                      startOfDay(endDate),
                      startOfDay(tempValue.startDate),
                    );
                    setTempValue((oldTempValue) => ({
                      ...oldTempValue,
                      endDate,
                      days,
                    }));
                  }}
                />
                <Text style={{ color: "#9f9f9f", marginTop: 15 }}>
                  Продолжительность: {tempValue.days}{" "}
                  {getWordForm(tempValue.days, ["день", "дня", "дней"])}
                </Text>
              </>
            )}

            {index === SWITCH.DAYS && (
              <>
                <FieldControl label="Продолжительность">
                  <View style={{ flexDirection: "row", alignItems: "stretch" }}>
                    <TextField
                      style={{ marginBottom: 0, flex: 1 }}
                      keyboardType="number-pad"
                      maxLength={3}
                      value={`${tempValue.days}`}
                      onChangeText={(daysText: string) => {
                        const days =
                          daysText && daysText !== "0"
                            ? parseInt(daysText.replace(/\D/g, ""))
                            : 1;
                        const endDate = addDays(tempValue.startDate, days);
                        setTempValue((oldTempValue) => ({
                          ...oldTempValue,
                          days,
                          endDate,
                        }));
                      }}
                    />
                    <View
                      style={{
                        borderBottomColor: "#e4e5e8",
                        borderBottomWidth: 1,
                        justifyContent: "center",
                      }}>
                      <Text
                        style={{
                          color: "#9f9f9f",
                        }}>
                        {getWordForm(tempValue.days, ["день", "дня", "дней"])}
                      </Text>
                    </View>
                  </View>
                </FieldControl>

                <Text style={{ color: "#9f9f9f", marginTop: 15 }}>
                  Дата окончания: {format(tempValue.endDate, "dd MMM yyyy")}
                </Text>
              </>
            )}
          </>
        )}
      </Tile>

      <Button title="Submit" onPress={accept} />
    </ScrollView>
  );
};

export default EditPeriod;
