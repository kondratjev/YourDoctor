import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Tile from "../../components/Tile";
import styles from "./EditSchedule.styles";
import ReceptionField from "./ReceptionField";

const EditSchedule = ({ route }) => {
  const { values, onAccept } = route.params;
  const navigation = useNavigation();
  const [tempValues, setTempValues] = useState(values);

  const addReception = () => {
    setTempValues((oldTempValues) => [
      ...oldTempValues,
      { time: new Date(), dose: 1 },
    ]);
  };

  const removeReception = (index: number) => () => {
    setTempValues((oldTempValues) =>
      oldTempValues.filter((item, i) => i !== index),
    );
  };

  const accept = (index: number) => (tempValue) => {
    setTempValues((oldTempValues) => {
      const temp = [...oldTempValues];
      temp[index] = tempValue;
      return temp;
    });
  };

  const save = useCallback(() => {
    onAccept(tempValues);
    navigation.goBack();
  }, [navigation, onAccept, tempValues]);

  return (
    <ScrollView>
      <Tile title="Приемы" style={styles.tile}>
        {tempValues.map((reception, index) => (
          <ReceptionField
            key={`${reception.dose}${reception.time}`}
            label={`${index + 1} прием`}
            value={reception}
            onAccept={accept(index)}
            onRemove={removeReception(index)}
          />
        ))}

        <TouchableOpacity
          onPress={addReception}
          style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 11,
              backgroundColor: "green",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                lineHeight: 21,
              }}>
              +
            </Text>
          </View>
          <Text style={{ marginLeft: 15, fontSize: 16 }}>Добавить прием</Text>
        </TouchableOpacity>
      </Tile>

      <Button title="Submit" onPress={save} />
    </ScrollView>
  );
};

export default EditSchedule;
