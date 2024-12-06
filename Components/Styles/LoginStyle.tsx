import { StyleSheet } from "react-native";

export const Loginstyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginInline: "auto",
  },
  startLabel: {
    color: "#3700b3",
    fontSize: 30,
    marginLeft: 100,
    marginBottom: 50,
    fontWeight: "bold",
  },
  icon: {
    position: "relative",
    top: -63,
    left: 250,
  },
  inputLabel: {
    marginBottom: 10,
  },
  signText: {
    color: "#3700b3",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
