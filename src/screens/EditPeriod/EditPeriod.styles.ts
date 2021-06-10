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
  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchText: { fontSize: 16 },

  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
});
