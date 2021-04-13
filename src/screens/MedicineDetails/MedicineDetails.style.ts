import styled from "styled-components/native";

import DefaultTile from "../../components/Tile";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f5f6f8;
`;

export const Tile = styled(DefaultTile)`
  padding: 10px 15px;
`;

export const NameInput = styled.TextInput`
  font-size: 26px;
  color: #222;
  margin: 10px 0 20px;
`;

export const Field = styled.View`
  border-bottom-color: #e4e5e8;
  border-bottom-width: 1px;
`;

export const FieldLabel = styled.Text`
  color: #9f9f9f;
  font-size: 15px;
`;

export const FieldContent = styled.View``;

export const Icon = styled.View``;

export const Colors = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0 10px;
`;

type ColorProps = {
  color: string;
  isSelected?: boolean;
};

export const Color = styled.TouchableOpacity<ColorProps>`
  border-width: 2px;
  border-color: ${({ isSelected, color }) =>
    isSelected ? color : "transparent"};
  border-radius: 50px;
  padding: 4px;
`;

export const ColorInner = styled.View<{ color: string }>`
  height: 25px;
  width: 25px;
  background-color: ${({ color }) => color || "transparent"};
  border-radius: 15px;
`;

export const Comment = styled.TextInput`
  min-height: 100px;
  font-size: 16px;
`;
