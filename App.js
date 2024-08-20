import React from "react";
import { StyleSheet } from "react-native";
import AppNav from "./routes/AppNav";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProfileInfos from "./screens/ProfileInfos";

// "@react-native-community/masked-view": "^0.1.11",
// "@react-navigation/drawer": "^6.6.3",
// "@react-navigation/native": "^6.1.7",
// "@react-navigation/stack": "^6.3.17",

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            // options={{ title: "Connexion" }}
          />
          <Stack.Screen
            name="ProfileInfos"
            component={ProfileInfos}
            // options={{ title: "Vos Inf" }}
          />
          <Stack.Screen name="Home" component={AppNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
