import React from "react"
import { StyleSheet, Text, View } from "react-native"
import MenuTile from "./MenuTile"

const MenuScreen = ({ navigation }) => {
  const MenuItems = [
    {
      title: "Item 1",
      component: "MenuItem1",
    },
    {
      title: "Item 2",
      component: "MenuItem2",
    },
    {
      title: "Item 3",
      component: "MenuItem3",
    },
  ]

  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.helloText}>Hello,</Text>
      <Text style={styles.nameText}>Greg</Text>
      <View style={styles.tilesContainer}>
        {MenuItems.map((item) => (
          <MenuTile
            key={item.title}
            title={item.title}
            component={item.component}
            navigation={navigation}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 40,
    justifyContent: "top",
    bottom: 20,
  },
  tilesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  helloText: {
    fontSize: 20,
  },
  nameText: {
    fontSize: 30,
    fontWeight: 400,
  },
})

export default MenuScreen
