import React, { useCallback, useLayoutEffect } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Medicine from "../../components/Medicine";
import Tile from "../../components/Tile";
// import Folder from "../../icons/Pills/Folder";
import Capsule from "../../icons/Pills/Capsule";
import Pill from "../../icons/Pills/Pill";

import { MEDICINE } from "../../theme/palette";
// import Group from "./Group";
import styles from "./Medicines.styles";
import Plus from "../../icons/Plus";

const Medicines = () => {
  const navigation = useNavigation();

  const goToMedicines = useCallback(() => {
    navigation.navigate("MedicineDetails");
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 20 }} onPress={goToMedicines}>
          <Plus />
        </TouchableOpacity>
      ),
    });
  }, [goToMedicines, navigation]);

  const openDetails = useCallback(() => {
    navigation.navigate("MedicineDetails");
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Tile title="Лекарства">
        <Medicine
          percent={50}
          Icon={Pill}
          palette={MEDICINE.PURPLE}
          name="Цитрамон"
          description="Осталось 7 приемов"
          onPress={openDetails}
        />
        <Medicine
          percent={25}
          Icon={Capsule}
          palette={MEDICINE.RED}
          name="Цитрамон"
          description="Осталось 12 приемов"
          onPress={openDetails}
          isLast
        />
      </Tile>
    </ScrollView>
  );
};

export default Medicines;
