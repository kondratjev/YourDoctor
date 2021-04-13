import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 15px 0 0 15px;
  flex-direction: row;
`;

export const Wrapper = styled.View<{ isLast?: boolean }>`
  flex-direction: row;
  flex: 1;
  padding: 0 15px 15px 0;
  margin-left: 10px;

  ${({ isLast }) =>
    !isLast &&
    css`
      border-bottom-color: #efefef;
      border-bottom-width: 1.5px;
    `}
`;

export const Content = styled.View``;

export const Name = styled.Text`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 7px;
  color: #222;
`;

export const Description = styled.Text`
  color: #9f9f9f;
  font-size: 15px;
`;

export const Time = styled.Text`
  margin-left: auto;
  font-size: 15px;
  color: #9f9f9f;
`;
