import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6f8",
  },
  tile: { padding: 15 },
  nameInput: {
    fontSize: 26,
    color: "#222",
    marginTop: 10,
    marginBottom: 20,
  },
  colors: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10,
  },
  color: {
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 50,
    padding: 4,
  },
  colorInner: {
    height: 25,
    width: 25,
    borderRadius: 15,
  },
  comment: {
    marginBottom: 0,
  },
});
