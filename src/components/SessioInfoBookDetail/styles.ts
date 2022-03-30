import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sessionHeader: {
    width: "100%",
    flexDirection: "row",
    height: 200,
    marginBottom: 25,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 2,
    paddingLeft: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonFavorite: {
    width: 120,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#0AF",
    borderRadius: 5,
    marginTop: 10,
  },
  textButton: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  }
});
