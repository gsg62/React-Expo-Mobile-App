import { View, StyleSheet, Button } from "react-native"

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
  )
}

const styles = StyleSheet.create({
  tileContainer: {
    height: 80,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  helloText: {
    fontSize: 20,
  },
  tileText: {
    fontSize: 16,
    fontWeight: 400,
  },
})

export default MenuTile
