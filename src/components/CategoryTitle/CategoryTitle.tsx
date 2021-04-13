import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import { Container, Title } from "./CategoryTitle.style";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const CategoryTitle = (props: Props) => {
  const { style, children } = props;

  return (
    <Container style={style}>
      <Title>{children}</Title>
    </Container>
  );
};

export default CategoryTitle;
