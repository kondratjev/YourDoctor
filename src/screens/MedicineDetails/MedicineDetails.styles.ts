import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6f8",
  },
  tile: { paddingVertical: 20, paddingHorizontal: 15 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  name: {
    fontSize: 26,
    fontWeight: "500",
    color: "#222",
    marginBottom: 5,
  },
  category: {
    color: "#9f9f9f",
    fontSize: 15,
  },
  field: {
    borderBottomColor: "#e4e5e8",
    borderBottomWidth: 1,
    marginBottom: 25,
  },
  fieldLabel: {
    color: "#9f9f9f",
    fontSize: 15,
  },
  fieldText: {
    fontSize: 16,
    color: "#222",
    paddingTop: 8,
    paddingBottom: 10,
  },
});
