import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import {
  Container,
  Wrapper,
  IconBackground,
  Name,
  Description,
} from "./Group.style";

type Props = {
  style?: StyleProp<ViewStyle>;
  Icon: ({ color }: { color?: string | undefined }) => JSX.Element;
  group: {
    name: string;
    count: number;
  };
  isLast?: boolean;
  palette: {
    color: string;
    bgColor: string;
  };
};

const Group = (props: Props) => {
  const { style, Icon, group, isLast, palette } = props;

  return (
    <Container style={style}>
      <IconBackground bgColor={palette.bgColor}>
        <Icon color={palette.color} />
      </IconBackground>
      <Wrapper isLast={isLast}>
        <Name>{group.name}</Name>
        <Description>{group.count} лекарства</Description>
      </Wrapper>
    </Container>
  );
};

export default Group;
