import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderBottomColor: "#e4e5e8",
    borderBottomWidth: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
  },
  icon: {
    marginLeft: "auto",
  },
  value: {
    fontSize: 16,
    color: "#222",
  },
  modalContent: {
    maxHeight: (Dimensions.get("window").height / 4) * 3,
  },
  modalLabel: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    padding: 20,
  },
  modalAcceptButton: {
    backgroundColor: "#177ceb",
    alignItems: "center",
    justifyContent: "center",
  },
  modalAcceptButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 15,
  },
});
