import { Text, View, StyleSheet, Button, ActivityIndicator } from "react-native"
import { useToast } from "react-native-toast-notifications"
import { useJokeApi } from "../../hooks/useJokeApi"
import { useLocalStorage } from "../../hooks/useLocalStorage"

const MenuItem1 = () => {
  const { loading, getRandomJoke, joke } = useJokeApi()
  const { addJoke } = useLocalStorage()
  const toast = useToast()

  let buttonTitle = joke ? "lets hear another" : "lets hear it"

  const handlePress = (joke) => {
    const result = addJoke(joke)
    if (joke.id == result._id) {
      toast.show("joke saved", { type: "success" })
    } else {
      console.log(result)
      toast.show("Error adding joke", { type: "danger" })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>chuck norris joke generator</Text>
      <Button title={buttonTitle} onPress={() => getRandomJoke()} />
      {loading ? (
        <ActivityIndicator style={styles.indicator} size="large" />
      ) : (
        <View>
          <Text style={styles.jokeText}>{joke?.value}</Text>
          <Button title="save joke" onPress={() => handlePress(joke)} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    height: "100%",
  },
  titleText: {
    fontSize: 24,
    padding: 20,
  },
  jokeText: {
    fontSize: 18,
    margin: 20,
  },
  indicator: {
    top: 20,
  },
})

export default MenuItem1
