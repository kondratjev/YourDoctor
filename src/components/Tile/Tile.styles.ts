import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    textTransform: "uppercase",
    letterSpacing: -0.25,
    color: "#9f9f9f",
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  content: {
    backgroundColor: "#fff",
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },
});
