import React from "react";
import { Text, View } from "react-native";
import MenuTile from "./MenuTile";
import styles from "../../style/styles";

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
  ];

  return (
    <View style={styles.menuContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>menu screen</Text>
      </View>
      <View style={styles.menuTilesContainer}>
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
  );
};

// const styles = StyleSheet.create({
//   menuContainer: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//     justifyContent: "top",
//     bottom: 20,
//   },
//   titleContainer: {
//     alignItems: "center",
//   },
//   menuTilesContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     padding: 10,
//   },
//   titleText: {
//     fontSize: 24,
//     padding: 20,
//   },
// })

export default MenuScreen;
