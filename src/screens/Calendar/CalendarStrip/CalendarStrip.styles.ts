import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomColor: "#dfdfdf",
    borderBottomWidth: 1,
  },
  item: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  day: {
    flex: 1,
    alignItems: "center",
  },
  dayShortName: {
    marginBottom: 3,
    textTransform: "uppercase",
    fontSize: 12,
    color: "#9f9f9f",
    fontWeight: "500",
  },
  dayNumberWrapper: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  dayNumberWrapperSelected: { backgroundColor: "#1a7ae9" },
  dayNumber: {
    textAlign: "center",
    color: "#9f9f9f",
    fontWeight: "500",
    fontSize: 15,
  },
  dayNumberSelected: {
    color: "#fff",
  },
});
