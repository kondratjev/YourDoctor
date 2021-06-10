import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  content: {
    flex: 1,
    paddingBottom: 15,
    paddingRight: 15,
    marginLeft: 10,
    borderBottomColor: "#efefef",
  },
  contentBorder: { borderBottomColor: "#efefef", borderBottomWidth: 1.5 },
  iconBackground: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 6,
    color: "#222",
  },
  description: {
    color: "#9f9f9f",
  },
});
