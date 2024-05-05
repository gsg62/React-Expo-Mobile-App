import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ToastProvider } from "react-native-toast-notifications";
import ErrorBoundary from "react-native-error-boundary";
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from "react-native-exception-handler";
import { StatusBar } from "expo-status-bar";
import { RealmProvider } from "@realm/react";
import HomeScreen from "./app/src/components/Home/HomeScreen";
import MenuScreen from "./app/src/components/Menu/MenuScreen";
import MenuItem1 from "./app/src/components/Menu/MenuItem1";
import MenuItem2 from "./app/src/components/Menu/MenuItem2";
import MenuItem3 from "./app/src/components/Menu/MenuItem3";
import JokeModel from "./app/src/models/jokeModel";
import ErrorScreen from "./app/src/components/Error/ErrorScreen";
import {
  handleJSErrorForErrorBoundary,
  exceptionNativeHandler,
  exceptionJSHandler,
} from "./app/src/components/Error/ErrorHandlers";

const Stack = createNativeStackNavigator();

setNativeExceptionHandler(exceptionNativeHandler);
setJSExceptionHandler((error, isFatal) => {
  exceptionJSHandler(error);
}, true);

export default function App() {
  return (
    <ErrorBoundary
      onError={handleJSErrorForErrorBoundary}
      FallbackComponent={ErrorScreen}
    >
      <RealmProvider schema={[JokeModel]}>
        <ToastProvider>
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
        </ToastProvider>
      </RealmProvider>
    </ErrorBoundary>
  );
}
