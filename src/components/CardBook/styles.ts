import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bookItem: {
    height: 85,
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 10,
    padding: 5,
    flexDirection: "row",
    overflow: "hidden",
  },
  bookImageContainer: {
    height: "100%",
    width: 60,
    marginRight: 5,
  },
  bookTextsContainer: {
    flex: 1,
  },
  bookItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bookImage: {
    height: "100%",
    width: "100%",
  },
});
