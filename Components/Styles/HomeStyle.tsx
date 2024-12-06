import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#9c27b0",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 150,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  greeting: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  searchBar: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginInline: "auto",
    marginTop: 10,
    height: 100,
  },
  searchIcon: {
    bottom: -30,
    marginLeft: 270,
  },
});
