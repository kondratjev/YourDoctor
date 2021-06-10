import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#f5f6f8",
    flex: 1,
  },
  measurment: {
    paddingLeft: 15,
  },
  measurmentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#efefef",
    borderBottomWidth: 1.5,
    paddingVertical: 15,
    paddingRight: 15,
  },
  measurmentInfoTitle: {
    fontWeight: "500",
    fontSize: 16,
    color: "#222",
  },
  measurmentInfoFooter: {
    flexDirection: "row",
  },
});
