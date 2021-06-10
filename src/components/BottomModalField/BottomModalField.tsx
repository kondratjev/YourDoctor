import React, { useCallback, useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomModal from "../BottomModal";
import styles from "./BottomModalField.styles";

type Props = {
  label?: string;
  onAccept: () => void;
  render: ({ openDetails }: { openDetails: () => void }) => React.ReactNode;
};

const BottomModalField: React.FC<Props> = ({
  label,
  children,
  onAccept,
  render,
}) => {
  const insets = useSafeAreaInsets();

  const [isVisible, setIsVisible] = useState(false);

  const openDetails = useCallback(() => {
    setIsVisible(true);
  }, []);

  const closeDetails = useCallback(() => {
    setIsVisible(false);
  }, []);

  const accept = useCallback(() => {
    closeDetails();
    onAccept();
  }, [closeDetails, onAccept]);

  const modalAcceptButtonStyles = useMemo(() => {
    return {
      paddingBottom: insets.bottom,
    };
  }, [insets.bottom]);

  return (
    <>
      {render({ openDetails })}

      <BottomModal
        isVisible={isVisible}
        onClose={closeDetails}
        withBottomOffset={false}>
        <View style={styles.modalContent}>
          <Text style={styles.modalLabel}>{label}</Text>
          {children}
          <TouchableOpacity
            style={[styles.modalAcceptButton, modalAcceptButtonStyles]}
            onPress={accept}>
            <Text style={styles.modalAcceptButtonText}>Подтвердить</Text>
          </TouchableOpacity>
        </View>
      </BottomModal>
    </>
  );
};

export default BottomModalField;
