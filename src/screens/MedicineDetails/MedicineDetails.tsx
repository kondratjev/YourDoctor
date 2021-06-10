import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import ProgressCircle from "react-native-progress-circle";
import Tile from "../../components/Tile";
import More from "../../icons/More";
import Pill from "../../icons/Pills/Pill";
import { MEDICINE } from "../../theme/palette";
import Actions from "./Actions";
import styles from "./MedicineDetails.styles";

const Field = ({
  style,
  label,
  value,
}: {
  style?: ViewStyle;
  label: string;
  value: string;
}) => {
  return (
    <View style={[styles.field, style]}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Text style={styles.fieldText}>{value}</Text>
    </View>
  );
};

const MedicineDetails = () => {
  const navigation = useNavigation();

  const [isActionsVisible, setActionsVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => setActionsVisible(true)}>
          <More />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const closeActions = useCallback(() => {
    setActionsVisible(false);
  }, []);

  const editMedicine = useCallback(() => {
    closeActions();
    navigation.navigate("EditMedicine");
  }, [closeActions, navigation]);

  return (
    <ScrollView style={styles.container}>
      <Tile title="Описание">
        <View style={styles.tile}>
          <View style={styles.header}>
            <View>
              <Text style={styles.name}>Нурофен</Text>
              <Text style={styles.category}>Капсулы</Text>
            </View>
            <ProgressCircle
              percent={50}
              radius={25}
              borderWidth={2}
              color={MEDICINE.PURPLE.color}
              shadowColor={MEDICINE.PURPLE.bgColor}
              bgColor={MEDICINE.PURPLE.bgColor}>
              <Pill color={MEDICINE.PURPLE.color} />
            </ProgressCircle>
          </View>

          <Field label="Периодичность" value="Каждый день" />
          <Field label="Дозировка" value="2 раза в день — 20 мг; 40 мг." />
          <Field label="Прием пищи" value="Не важно" />
          <Field label="Срок приема" value="3 дня" />
          <Field label="Комментарий" value="—" style={{ marginBottom: 0 }} />
        </View>
      </Tile>

      <Actions
        isVisible={isActionsVisible}
        onClose={closeActions}
        onAccept={editMedicine}
        onChange={editMedicine}
        onStop={editMedicine}
        onRemove={editMedicine}
      />
    </ScrollView>
  );
};

export default MedicineDetails;
