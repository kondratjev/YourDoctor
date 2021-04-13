import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";

import Medicine from "../../components/Medicine";
import CategoryTitle from "../../components/CategoryTitle";
import Tile from "../../components/Tile";

import ArrowRight from "../../components/Icons/ArrowRight";
import Drop from "../../components/Icons/Pills/Drop";

import { MEDICINE } from "../../theme/palette";

import {
  Container,
  Head,
  HeadPhoto,
  HeadGradient,
  HeadFooter,
  HeadName,
  HeadInfo,
  Measurement,
  MeasurementWrapper,
  MeasurementInfo,
  MeasurementInfoTitle,
  MeasurementInfoFooter,
  MeasurementInfoText,
  MeasurementInfoDate,
  MeasurementPulse,
  CategoryButton,
  CategoryButtonText,
} from "./Profile.style";

const Profile = () => {
  const navigation = useNavigation();

  const goToMedicines = useCallback(() => {
    navigation.navigate("Medicines");
  }, [navigation]);

  return (
    <Container>
      <CategoryTitle>Последние измерения</CategoryTitle>
      <Tile>
        <Measurement>
          <MeasurementWrapper>
            <MeasurementInfo>
              <MeasurementInfoTitle>Пульс</MeasurementInfoTitle>
              <MeasurementInfoFooter>
                <MeasurementInfoText>уд. в мин.</MeasurementInfoText>
                <MeasurementInfoDate>2 часа назад</MeasurementInfoDate>
              </MeasurementInfoFooter>
            </MeasurementInfo>
            <MeasurementPulse>80</MeasurementPulse>
          </MeasurementWrapper>
        </Measurement>
        <Measurement>
          <MeasurementWrapper>
            <MeasurementInfo>
              <MeasurementInfoTitle>Давление</MeasurementInfoTitle>
              <MeasurementInfoFooter>
                <MeasurementInfoText>мм рт. ст.</MeasurementInfoText>
                <MeasurementInfoDate>2 часа назад</MeasurementInfoDate>
              </MeasurementInfoFooter>
            </MeasurementInfo>
            <MeasurementPulse>120/80</MeasurementPulse>
          </MeasurementWrapper>
        </Measurement>
        <CategoryButton>
          <CategoryButtonText>Все медданные</CategoryButtonText>
          <ArrowRight />
        </CategoryButton>
      </Tile>
      <CategoryTitle>Принимаемые лекарства</CategoryTitle>
      <Tile>
        <Medicine
          percent={50}
          Icon={Drop}
          palette={MEDICINE.RED}
          title="Цитрамон"
          description="Осталось 3 приема"
        />
        <Medicine
          percent={20}
          Icon={Drop}
          palette={MEDICINE.PURPLE}
          title="Цитрамон"
          description="Осталось 7 приемов"
        />
        <CategoryButton onPress={goToMedicines}>
          <CategoryButtonText>Все лекарства</CategoryButtonText>
          <ArrowRight />
        </CategoryButton>
      </Tile>
    </Container>
  );
};

export default Profile;
