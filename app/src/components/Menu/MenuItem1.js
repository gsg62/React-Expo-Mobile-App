import { Text, View, Button, ActivityIndicator } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { useJokeApi } from "../../hooks/useJokeApi";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import styles from "../../style/styles";

const MenuItem1 = () => {
  const { loading, getRandomJoke, joke } = useJokeApi();
  const { addJoke } = useLocalStorage();
  const toast = useToast();

  let buttonTitle = joke ? "lets hear another" : "lets hear it";

  const handlePress = (joke) => {
    const result = addJoke(joke);
    if (joke.id == result._id) {
      toast.show("joke saved", { type: "success" });
    } else {
      console.log(result);
      toast.show("Error adding joke", { type: "danger" });
    }
  };

  return (
    <View style={styles.baseContainer}>
      <Text style={styles.titleText}>chuck norris joke generator</Text>
      <Button title={buttonTitle} onPress={() => getRandomJoke()} />
      {loading && <ActivityIndicator style={styles.indicator} size="large" />}
      {joke && !loading && (
        <View>
          <Text style={styles.jokeText}>{joke?.value}</Text>
          <Button title="save joke" onPress={() => handlePress(joke)} />
        </View>
      )}
    </View>
  );
};

export default MenuItem1;
