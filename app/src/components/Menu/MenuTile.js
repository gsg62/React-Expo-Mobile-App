import { View, Button } from "react-native";
import styles from "../../style/styles";

const MenuTile = (props) => {
  return (
    <View style={styles.tileContainer}>
      <Button
        title={props.title}
        onPress={() => props.navigation.navigate(props.component)}
      >
        {props.title}
      </Button>
    </View>
  );
};

export default MenuTile;
