import { Button, StyleSheet, Text, View } from "react-native"

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>This is the home screen</Text>
      <Text>Information about the app goes here .........</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Enter App"
          onPress={() => navigation.navigate("Menu")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
    padding: 10,
  },
  titleText: {
    fontSize: 30,
  },
  buttonContainer: {
    height: "50%",
    justifyContent: "center",
  },
})

export default HomeScreen
