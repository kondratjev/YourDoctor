import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  children: JSX.Element;
};

const BottomModal = ({ children, isVisible, onClose }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      backdropOpacity={0.5}
      swipeDirection="down"
      avoidKeyboard
      propagateSwipe>
      <View
        style={{
          marginTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: "#fff",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        <View>{children}</View>
      </View>
    </Modal>
  );
};

export default BottomModal;
