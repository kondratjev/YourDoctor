import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./BottomModal.styles";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  withBottomOffset?: boolean;
};

const BottomModal = ({
  children,
  isVisible,
  onClose,
  withBottomOffset = true,
}: Props) => {
  const insets = useSafeAreaInsets();

  const contentStyles = {
    marginTop: insets.top,
    paddingBottom: insets.bottom,
  };

  return (
    <Modal
      style={styles.container}
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      backdropOpacity={0.5}
      swipeDirection="down"
      propagateSwipe>
      <View
        style={
          withBottomOffset ? [styles.content, contentStyles] : styles.content
        }>
        {children}
      </View>
    </Modal>
  );
};

export default BottomModal;
