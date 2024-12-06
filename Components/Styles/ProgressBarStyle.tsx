import { StyleSheet } from "react-native";

export const ProgressBarStyle = StyleSheet.create({
  container: {
    marginTop: 50,
    marginInline: "auto",
    height: 20,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    maxWidth: 300,
  },
  bar: {
    height: "100%",
    backgroundColor: "#3700b3",
  },
});
