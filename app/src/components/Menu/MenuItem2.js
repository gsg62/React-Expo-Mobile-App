import { Text, View, Button } from "react-native";
import { useState, Fragment } from "react";
import { useQuery } from "@realm/react";
import JokeModel from "../../models/jokeModel";
import DeleteButton from "../Buttons/DeleteButton";
import EditModal from "../Modals/EditModal";
import EditButton from "../Buttons/EditButton";
import styles from "../../style/styles";

const MenuItem2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedJoke, setSelectedJoke] = useState();
  const jokes = useQuery(JokeModel);

  return (
    <View style={styles.baseContainer}>
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

export default MenuItem2;
