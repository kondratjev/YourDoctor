import React from "react";

import Tile from "../../components/Tile";

import ArrowRight from "../../icons/ArrowRight";

import {
  Container,
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
  return (
    <Container>
      <Tile title="Последние измерения">
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
    </Container>
  );
};

export default Profile;
