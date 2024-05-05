import { Button, Text, View } from "react-native";
import styles from "../../style/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.baseContainer}>
      <Text style={styles.titleText}>home screen</Text>
      <Text>Information about the app goes here .........</Text>
      <View style={styles.menuButtonContainer}>
        <Button title="Enter App" onPress={() => navigation.navigate("Menu")} />
      </View>
    </View>
  );
};

export default HomeScreen;
