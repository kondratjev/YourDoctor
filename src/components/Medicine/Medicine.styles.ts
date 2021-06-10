import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 15,
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    flex: 1,
    paddingRight: 15,
    paddingBottom: 15,
    marginLeft: 10,
  },
  contentBorder: { borderBottomColor: "#efefef", borderBottomWidth: 1.5 },
  name: {
    fontSize: 16,
    marginBottom: 6,
    color: "#222",
  },
  description: {
    color: "#9f9f9f",
  },
  time: {
    marginLeft: "auto",
    color: "#222",
  },
});
