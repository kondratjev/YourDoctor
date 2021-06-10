import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6f8",
  },
  tile: { padding: 15 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  nameInput: {
    fontSize: 26,
    color: "#222",
    marginTop: 10,
    marginBottom: 20,
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
  fieldContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fieldText: {
    fontSize: 16,
    color: "#222",
    paddingTop: 8,
    paddingBottom: 10,
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
