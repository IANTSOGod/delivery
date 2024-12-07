import { StyleSheet } from "react-native";

export const CardStyle = StyleSheet.create({
  container: {
    marginInline: "auto",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    overflow: "hidden",
  },
  labelZone: {
    flex: 1,
    backgroundColor: "#9c27b0",
    width: 300,
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  labelTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
