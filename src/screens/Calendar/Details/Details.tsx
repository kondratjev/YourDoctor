import React from "react";
import { Text, View } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import ActionButton from "../../../components/ActionButton";
import BottomModal from "../../../components/BottomModal";
import Check from "../../../icons/Check";
import ClockOutline from "../../../icons/ClockOutline";
import Cross from "../../../icons/Cross";
import Menu from "../../../icons/Menu";
import Capsule from "../../../icons/Pills/Capsule";
import { MEDICINE } from "../../../theme/palette";
import styles from "./Details.styles";

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
      <View style={styles.container}>
        <ProgressCircle
          percent={30}
          radius={25}
          borderWidth={2}
          color={MEDICINE.GREEN.color}
          shadowColor={MEDICINE.GREEN.bgColor}
          bgColor={MEDICINE.GREEN.bgColor}>
          <Capsule color={MEDICINE.GREEN.color} />
        </ProgressCircle>
        <Text style={styles.name}>{medicine?.name}</Text>
        <Text
          style={
            styles.description
          }>{`${medicine?.dosage} ${medicine?.eating}`}</Text>
        {medicine?.comment && (
          <Text style={styles.comment}>{medicine.comment}</Text>
        )}
        <View style={styles.buttons}>
          <ActionButton Icon={Check} label="Принять" onPress={onAccept} />
          <ActionButton
            Icon={ClockOutline}
            label="Отложить"
            onPress={onPostpone}
          />
          <ActionButton Icon={Cross} label="Пропустить" onPress={onSkip} />
          <ActionButton Icon={Menu} label="Подробнее" onPress={onDetails} />
        </View>
      </View>
    </BottomModal>
  );
};

export default Details;
