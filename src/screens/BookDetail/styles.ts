import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    height: 150,
    width: "100%",
    backgroundColor: "#0Af",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 35,
    position: "relative",
  },
  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    padding: 10,
  },
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
  },
});
