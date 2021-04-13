import styled from "styled-components/native";

export const Container = styled.View`
  padding: 25px 15px 15px;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 26px;
  color: #222;
  margin: 10px 0;
`;

export const Description = styled.Text`
  color: #9f9f9f;
`;

export const Comment = styled.Text`
  margin-top: 20px;
  font-size: 15px;
`;

export const Buttons = styled.View`
  margin-top: 25px;
  flex-direction: row;
`;

export const Button = styled.View`
  align-items: center;
  flex: 1;
`;

export const ButtonIcon = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  background-color: #f1f5f7;
  border-radius: 100px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  font-size: 12px;
  color: #9f9f9f;
`;
