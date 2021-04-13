import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Placeholder = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: ${Dimensions.get("window").width}px;
`;

export const PlaceholderText = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;
