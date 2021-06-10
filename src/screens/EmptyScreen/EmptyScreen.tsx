import React from "react";
import { ScrollView, Text } from "react-native";
import styles from "./EmptyScreen.styles";

const EmptyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Empty</Text>
    </ScrollView>
  );
};

export default EmptyScreen;
