import { useNavigation } from "@react-navigation/core";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FieldControl from "../../../components/FieldControl";
import ArrowRight from "../../../icons/ArrowRight";
import styles from "./ScreenField.styles";

type Props = {
  label: string;
  modalLabel: string;
  screen: string;
  params: any;
};

const ScreenField = ({ label, modalLabel, screen, params }: Props) => {
  const navigation = useNavigation();

  const goToSchedule = useCallback(() => {
    navigation.navigate(screen, params);
  }, [navigation, params, screen]);

  return (
    <FieldControl label={modalLabel}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.content} onPress={goToSchedule}>
          <Text style={styles.value}>{label}</Text>
          <View style={styles.icon}>
            <ArrowRight />
          </View>
        </TouchableOpacity>
      </View>
    </FieldControl>
  );
};

export default ScreenField;
