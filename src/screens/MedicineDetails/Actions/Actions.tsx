import React from "react";
import { View } from "react-native";
import ActionButton from "../../../components/ActionButton";
import BottomModal from "../../../components/BottomModal";
import Check from "../../../icons/Check";
import Edit from "../../../icons/Edit";
import Pause from "../../../icons/Pause";
import Trash from "../../../icons/Trash";
import styles from "./Actions.styles";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  onAccept: () => void;
  onChange: () => void;
  onStop: () => void;
  onRemove: () => void;
};

const Actions = (props: Props) => {
  const { isVisible, onClose, onAccept, onChange, onStop, onRemove } = props;

  return (
    <BottomModal isVisible={!!isVisible} onClose={onClose}>
      <View style={styles.container}>
        <ActionButton Icon={Check} label="Принять" onPress={onAccept} />
        <ActionButton Icon={Edit} label="Изменить" onPress={onChange} />
        <ActionButton Icon={Pause} label="Остановить" onPress={onStop} />
        <ActionButton Icon={Trash} label="Удалить" onPress={onRemove} />
      </View>
    </BottomModal>
  );
};

export default Actions;
