import React, { useCallback } from "react";

import CategoryTitle from "../../components/CategoryTitle";
import Medicine from "../../components/Medicine";
import Tile from "../../components/Tile";
import Folder from "../../components/Icons/Pills/Folder";
import Capsule from "../../components/Icons/Pills/Capsule";
import Drop from "../../components/Icons/Pills/Drop";

import { MEDICINE } from "../../theme/palette";

import Group from "./Group";

import { Container } from "./Medicines.style";
import { useNavigation } from "@react-navigation/native";

const Medicines = () => {
  const navigation = useNavigation();

  const openDetails = useCallback(() => {
    navigation.navigate("MedicineDetails");
  }, [navigation]);

  return (
    <Container>
      <CategoryTitle>Группы</CategoryTitle>
      <Tile>
        <Group
          Icon={Folder}
          palette={MEDICINE.GREEN}
          group={{ name: "От спины", count: 2 }}
        />
        <Group
          Icon={Folder}
          palette={MEDICINE.RED}
          group={{ name: "От спины", count: 2 }}
          isLast
        />
      </Tile>
      <CategoryTitle>Остальные лекарства</CategoryTitle>
      <Tile>
        <Medicine
          percent={50}
          Icon={Drop}
          palette={MEDICINE.PURPLE}
          title="Цитрамон"
          description="Осталось 7 приемов"
          onPress={openDetails}
        />
        <Medicine
          percent={25}
          Icon={Capsule}
          palette={MEDICINE.RED}
          title="Цитрамон"
          description="Осталось 12 приемов"
          onPress={openDetails}
          isLast
        />
      </Tile>
    </Container>
  );
};

export default Medicines;
