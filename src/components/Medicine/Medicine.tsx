import React from "react";
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
import ProgressCircle from "react-native-progress-circle";

import {
  Container,
  Wrapper,
  Content,
  Name,
  Description,
  Time,
} from "./Medicine.style";

type Props = {
  style?: StyleProp<ViewStyle>;
  percent?: number;
  Icon: ({ color }: { color?: string | undefined }) => JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  description: string;
  time?: string;
  isLast?: boolean;
  palette: {
    color: string;
    bgColor: string;
  };
};

const Medicine = (props: Props) => {
  const {
    style,
    Icon,
    onPress,
    percent = 0,
    title,
    description,
    time,
    isLast,
    palette,
  } = props;

  return (
    <Container style={style} onPress={onPress}>
      <ProgressCircle
        percent={percent}
        radius={25}
        borderWidth={2}
        color={palette.color}
        shadowColor={palette.bgColor}
        bgColor={palette.bgColor}>
        <Icon color={palette.color} />
      </ProgressCircle>
      <Wrapper isLast={isLast}>
        <Content>
          <Name>{title}</Name>
          <Description>{description}</Description>
        </Content>
        {time && <Time>{time}</Time>}
      </Wrapper>
    </Container>
  );
};

export default Medicine;
