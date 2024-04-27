import HomeScreen from "./app/src/screens/Home/HomeScreen"
import MenuScreen from "./app/src/screens/Menu/MenuScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import MenuItem1 from "./app/src/screens/Menu/MenuItem1";
import MenuItem2 from "./app/src/screens/Menu/MenuItem2"
import MenuItem3 from "./app/src/screens/Menu/MenuItem3"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: "Menu" }}
        />
        <Stack.Screen
          name="MenuItem1"
          component={MenuItem1}
          options={{ title: "Menu Item 1" }}
        />
        <Stack.Screen
          name="MenuItem2"
          component={MenuItem2}
          options={{ title: "Menu Item 2" }}
        />
        <Stack.Screen
          name="MenuItem3"
          component={MenuItem3}
          options={{ title: "Menu Item 3" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
