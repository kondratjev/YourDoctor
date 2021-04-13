import React, { useState } from "react";
import { Text, View } from "react-native";

import CategoryTitle from "../../components/CategoryTitle";
import BottomModal from "../../components/BottomModal";

import { MEDICINE } from "../../theme/palette";

import {
  Container,
  Tile,
  NameInput,
  Field,
  FieldLabel,
  FieldContent,
  Icon,
  Colors,
  Color,
  ColorInner,
  Comment,
} from "./MedicineDetails.style";

const MedicineDetails = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const openDetails = () => {
    setIsVisible(true);
  };

  const closeDetails = () => {
    setIsVisible(false);
  };

  return (
    <Container>
      <CategoryTitle>Описание</CategoryTitle>
      <Tile>
        <NameInput placeholder="Название" placeholderTextColor="#9f9f9f" />

        <Field>
          <FieldLabel>Тип лекарства</FieldLabel>
          <FieldContent>
            <Icon />
            <Text onPress={openDetails}>Some text</Text>
          </FieldContent>
        </Field>

        <BottomModal isVisible={isVisible} onClose={closeDetails}>
          <View
            style={{
              backgroundColor: "red",
              height: 200,
            }}
          />
        </BottomModal>

        <Colors>
          {Object.entries(MEDICINE).map(([label, value]) => (
            <Color
              key={label}
              color={value.color}
              isSelected={selectedColor === value.color}
              onPress={() => setSelectedColor(value.color)}>
              <ColorInner color={value.color} />
            </Color>
          ))}
        </Colors>
      </Tile>
      <CategoryTitle>Комментарий</CategoryTitle>
      <Tile>
        <Comment
          multiline
          placeholder="Введите комментарий"
          placeholderTextColor="#9f9f9f"
        />
      </Tile>
    </Container>
  );
};

export default MedicineDetails;
