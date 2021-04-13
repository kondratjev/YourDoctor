import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 15px 0 0 15px;
  flex-direction: row;
`;

export const Wrapper = styled.View<{ isLast?: boolean }>`
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

export const IconBackground = styled.View<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  height: 50px;
  width: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 7px;
  color: #222;
`;

export const Description = styled.Text`
  color: #9f9f9f;
  font-size: 15px;
`;
