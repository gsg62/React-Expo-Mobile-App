import { Text, View, StyleSheet, Button, ActivityIndicator } from "react-native"
// import { getRandomJoke } from "../../api/testApi";
import { useJokeApi } from "../../hooks/useJokeApi"

const MenuItem1 = (props) => {
  const { loading, getRandomJoke, joke } = useJokeApi()
  let buttonTitle = joke ? "lets hear another" : "lets hear it"

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>chuck norris joke generator</Text>
      <Button title={buttonTitle} onPress={() => getRandomJoke()} />
      {loading ? (
        <ActivityIndicator style={styles.indicator} size="large" />
      ) : (
        <Text style={styles.jokeText}>{joke}</Text>
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
    top: 20,
  },
  indicator: {
    top: 20,
  },
})

export default MenuItem1
