import { Text, View, StyleSheet, Button } from "react-native";
import { useState, Fragment } from "react";
import { useQuery } from "@realm/react";
import JokeModel from "../../models/jokeModel";
import DeleteButton from "../Buttons/DeleteButton";
import EditModal from "../Modals/EditModal";
import EditButton from "../Buttons/EditButton";

const MenuItem2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedJoke, setSelectedJoke] = useState();
  const jokes = useQuery(JokeModel);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>saved jokes</Text>
      {jokes.map((savedJoke) => (
        <Fragment key={savedJoke._id}>
          <JokeDisplay
            savedJoke={savedJoke}
            setModalVisible={setModalVisible}
            setSelectedJoke={setSelectedJoke}
          />
        </Fragment>
      ))}
      <EditModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedJoke={selectedJoke}
      />
      <Button title="test button" onPress={() => console.log(getAllJokes())} />
    </View>
  );
};

const JokeDisplay = ({ savedJoke, setModalVisible, setSelectedJoke }) => {
  return (
    <View style={styles.jokeContainer}>
      <View style={styles.editButtonContainer}>
        <EditButton
          setModalVisible={setModalVisible}
          setSelectedJoke={setSelectedJoke}
          jokeToSelect={savedJoke}
        />
      </View>
      <View style={styles.jokeTextContainer}>
        <Text numberOfLines={1}>{savedJoke.value}</Text>
      </View>
      <View style={styles.deleteButtonContainer}>
        <DeleteButton id={savedJoke._id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  editButtonContainer: {
    marginRight: 10,
  },

  titleText: {
    fontSize: 24,
    padding: 20,
  },
});

export default MenuItem2;
