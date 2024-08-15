import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./routes/DrawerNav";
import HomeStackScreen from "./routes/HomeStackNav";
import PortofolioStackScreen from "./routes/PortofolioStackNav";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ListesStackScreen from "./screens/Listes";
import MomentsStackScreen from "./screens/Moments";
import SignetsStackScreen from "./screens/Signets";
import SujetsStackScreen from "./screens/Sujets";

// const Drawer = createDrawerNavigator();
// const Drawer = createStackNavigator();

// "@react-native-community/masked-view": "^0.1.11",
// "@react-navigation/drawer": "^6.6.3",
// "@react-navigation/native": "^6.1.7",
// "@react-navigation/stack": "^6.3.17",

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerPosition: "left",
          // drawerType: "permanent",
          drawerType: "slide",
          // swipeEdgeWidth: 50,
          // overlayColor: "red",
          // drawerStyle: { backgroundColor: "grey" },
          // drawerActiveTintColor: "white",
          // drawerActiveBackgroundColor: "green",
          // drawerInactiveTintColor: "yellow",
          // drawerInactiveBackgroundColor: "red",
          // drawerItemStyle: {
          //   marginVertical: 30,
          // },
        }}
      >
        <Drawer.Screen
          component={HomeStackScreen}
          name="Home"
          options={{
            title: "ACCUEIL",
            drawerIcon: () => (
              <MaterialIcons name="home" size={24} color="grey" />
            ),
          }}
        />
        {/* <Drawer.Screen
          component={PortofolioStackScreen}
          name="Profil"
          options={{
            title: "Profil",
            drawerIcon: () => (
              <MaterialIcons name="home" size={24} color="grey" />
            ),
          }}
        />
        <Drawer.Screen
          component={ListesStackScreen}
          name="Listes"
          options={{
            // title: "ACCUEIL",
            drawerIcon: () => (
              <MaterialIcons name="home" size={24} color="grey" />
            ),
          }}
        />
        <Drawer.Screen
          component={SujetsStackScreen}
          name="Sujets"
          options={{
            // title: "ACCUEIL",
            drawerIcon: () => (
              <MaterialIcons name="home" size={24} color="grey" />
            ),
          }}
        />
        <Drawer.Screen
          component={SignetsStackScreen}
          name="Signets"
          options={{
            // title: "ACCUEIL",
            drawerIcon: () => (
              <MaterialIcons name="home" size={24} color="grey" />
            ),
          }}
        />
        <Drawer.Screen
          component={MomentsStackScreen}
          name="Moments"
          options={{
            // title: "ACCUEIL",
            drawerIcon: () => (
              <MaterialIcons name="home" size={24} color="grey" />
            ),
          }}
        /> */}
      </Drawer.Navigator>
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
