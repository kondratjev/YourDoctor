import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 15px 0;
  background-color: #fff;
  border-bottom-color: #dfdfdf;
  border-bottom-width: 1.5px;
`;

export const Item = styled.View`
  width: ${Dimensions.get("window").width}px;
  padding: 0 5px;
  flex-direction: row;
`;

export const Day = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const DayShortName = styled.Text`
  margin-bottom: 3px;
  text-transform: uppercase;
  font-size: 12px;
  color: #9f9f9f;
  font-weight: 500;
`;

export const DayNumberWrapper = styled.View<{ isSelected: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #1a7ae9;
    `}
`;

export const DayNumber = styled.Text<{ isSelected: boolean }>`
  text-align: center;
  color: #9f9f9f;
  font-weight: 500;
  font-size: 15px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: #fff;
    `}
`;

export const CurrentDate = styled.Text`
  margin-top: 10px;
  padding: 0 15px;
  text-align: center;
  color: #9f9f9f;
  font-size: 15px;
`;
