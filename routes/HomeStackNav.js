import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Portofolio from "../screens/Portofolio";
import Listes from "../screens/Listes";
import Sujets from "../screens/Sujets";
import Signets from "../screens/Signets";
import Moments from "../screens/Moments";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
          // headerLeft: () => (
          //   <MaterialIcons name="menu" size={24} color="black" />
          // ),
        }}
      />
      <HomeStack.Screen
        component={Portofolio}
        name="Profil"
        options={{
          title: "Profil",
          drawerIcon: () => (
            <MaterialIcons name="home" size={24} color="grey" />
          ),
        }}
      />
      <HomeStack.Screen
        component={Listes}
        name="Listes"
        options={{
          // title: "ACCUEIL",
          drawerIcon: () => (
            <MaterialIcons name="home" size={24} color="grey" />
          ),
        }}
      />
      <HomeStack.Screen
        component={Sujets}
        name="Sujets"
        options={{
          // title: "ACCUEIL",
          drawerIcon: () => (
            <MaterialIcons name="home" size={24} color="grey" />
          ),
        }}
      />
      <HomeStack.Screen
        component={Signets}
        name="Signets"
        options={{
          // title: "ACCUEIL",
          drawerIcon: () => (
            <MaterialIcons name="home" size={24} color="grey" />
          ),
        }}
      />
      <HomeStack.Screen
        component={Moments}
        name="Moments"
        options={{
          // title: "ACCUEIL",
          drawerIcon: () => (
            <MaterialIcons name="home" size={24} color="grey" />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;