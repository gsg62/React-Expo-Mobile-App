import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  baseContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    height: "100%",
  },
  jokeContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10,
  },
  jokeTextContainer: {
    justifyContent: "center",
    width: "70%",
  },
  deleteButtonContainer: {
    marginLeft: 10,
  },
  menuContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "top",
    bottom: 20,
  },
  menuTilesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  tileContainer: {
    height: 80,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuButtonContainer: {
    height: "80%",
    justifyContent: "center",
  },
  editButtonContainer: {
    marginRight: 10,
  },
  titleContainer: {
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    padding: 20,
  },
  tileText: {
    fontSize: 16,
    fontWeight: 400,
  },
  jokeText: {
    fontSize: 18,
    margin: 20,
  },
  indicator: {
    top: 20,
  },
});

export default styles;
