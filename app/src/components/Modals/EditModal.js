import { View, StyleSheet, Button, Modal, TextInput } from "react-native";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const EditModal = ({ selectedJoke, modalVisible, setModalVisible }) => {
  const { updateJoke } = useLocalStorage();
  const [newJoke, setNewJoke] = useState();

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            multiline
            style={styles.textInput}
            placeholder="type new joke"
            onChangeText={(newText) => setNewJoke(newText)}
            defaultValue={selectedJoke?.value}
          />
          <Button
            title="save"
            onPress={() => {
              updateJoke(selectedJoke._id, {
                value: newJoke,
              });
              setModalVisible(false);
            }}
          />
          <Button title="close modal" onPress={() => setModalVisible(false)} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    width: "80%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

export default EditModal;
