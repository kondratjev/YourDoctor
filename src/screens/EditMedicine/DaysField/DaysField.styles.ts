import { StyleSheet } from "react-native";

export default StyleSheet.create({
  content: { paddingLeft: 15 },
  item: {
    paddingVertical: 15,
    paddingRight: 15,
    borderBottomColor: "#e4e5e8",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLabel: { fontSize: 16, color: "#222" },
});
