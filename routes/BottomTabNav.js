import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, View } from "react-native";
import HomeStackScreen from "./HomeStackNav";
import Settings from "./../screens/Settings";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
            size = focused ? 30 : 20;
          } else if (route.name === "Settings") {
            iconName = "settings";
            size = focused ? 30 : 20;
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        component={HomeStackScreen}
        name="Home"
        options={{
          title: "ACCUEIL",
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={Settings}
        name="Settings"
        options={{
          title: "Réglages",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTabNav;
