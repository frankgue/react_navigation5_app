import React from "react";
import { Easing, StyleSheet } from "react-native";
import Home from "./components/Home";
import Portofolio from "./components/Portofolio";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const openConfig = {
//   animation: "spring",
//   config: {
//     stiffness: 1000,
//     damping: 20,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };
// const closeConfig = {
//   animation: "timinget",
//   config: {
//     duration: 900,
//     easing: Easing.ease,
//   },
// };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "slateblue" },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            textTransform: "uppercase",
          },
          gestureEnabled: true,
          gestureDirection: "vertical",
          // transitionSpec: {
          //   open: openConfig,
          //   close: closeConfig,
          // },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          component={Home}
          name="Home"
          options={{ title: "ACCUEIL" }}
        />
        <Stack.Screen
          component={Portofolio}
          name="Portofolio"
          options={({ route }) => ({
            headerTitle: route.params.name,
            headerStyle: { backgroundColor: route.params.color },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              textTransform: "uppercase",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  wrapper: {
    flex: 1,
    alignItems: "stretch",
    marginTop: 40,
  },
  viewStyle: {
    backgroundColor: "deepskyblue",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    padding: 20,
    color: "#fff",
  },
  textData: {
    color: "grey",
    padding: 9,
    fontSize: 19,
    textAlign: "center",
  },
});
