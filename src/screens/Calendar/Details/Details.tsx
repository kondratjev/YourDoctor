import React from "react";
import ProgressCircle from "react-native-progress-circle";

import BottomModal from "../../../components/BottomModal";
import Capsule from "../../../components/Icons/Pills/Capsule";
import Check from "../../../components/Icons/Check";
import Clock2 from "../../../components/Icons/Clock2";
import Cross from "../../../components/Icons/Cross";
import Menu from "../../../components/Icons/Menu";

import { MEDICINE } from "../../../theme/palette";

import {
  Container,
  Name,
  Description,
  Comment,
  Buttons,
  Button,
  ButtonIcon,
  ButtonLabel,
} from "./Details.style";

type Props = {
  medicine?: any;
  onClose: () => void;
  onAccept: () => void;
  onPostpone: () => void;
  onSkip: () => void;
  onDetails: () => void;
};

const Details = (props: Props) => {
  const { medicine, onClose, onAccept, onPostpone, onSkip, onDetails } = props;

  return (
    <BottomModal isVisible={!!medicine} onClose={onClose}>
      <Container>
        <ProgressCircle
          percent={30}
          radius={25}
          borderWidth={2}
          color={MEDICINE.GREEN.color}
          shadowColor={MEDICINE.GREEN.bgColor}
          bgColor={MEDICINE.GREEN.bgColor}>
          <Capsule color={MEDICINE.GREEN.color} />
        </ProgressCircle>
        <Name>{medicine?.name}</Name>
        <Description>{`${medicine?.dosage} ${medicine?.eating}`}</Description>
        {medicine?.comment && <Comment>{medicine.comment}</Comment>}
        <Buttons>
          <Button>
            <ButtonIcon onPress={onAccept}>
              <Check />
            </ButtonIcon>
            <ButtonLabel>Принять</ButtonLabel>
          </Button>
          <Button>
            <ButtonIcon onPress={onPostpone}>
              <Clock2 />
            </ButtonIcon>
            <ButtonLabel>Отложить</ButtonLabel>
          </Button>
          <Button>
            <ButtonIcon onPress={onSkip}>
              <Cross />
            </ButtonIcon>
            <ButtonLabel>Пропустить</ButtonLabel>
          </Button>
          <Button>
            <ButtonIcon onPress={onDetails}>
              <Menu />
            </ButtonIcon>
            <ButtonLabel>Подробнее</ButtonLabel>
          </Button>
        </Buttons>
      </Container>
    </BottomModal>
  );
};

export default Details;
