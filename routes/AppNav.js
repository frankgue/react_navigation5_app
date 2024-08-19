import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNav from "./BottomTabNav";
import CustomDrawerContent from "./../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

const AppNav = () => {
  return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "green",
          },
          headerTitleStyle: { fontWeight: "bold" },
          headerTintColor: "white",
          // headerRight: () => (
          //   <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
          //     <Item
          //       title="Panier"
          //       iconName="shopping-cart"
          //     />
          //   </HeaderButtons>
          // ),
          // headerLeft: () => (
          //   <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
          //     <Item
          //       title="Menu"
          //       iconName="menu"
          //     />
          //   </HeaderButtons>
          // ),
        })}
      >
        <Drawer.Screen
          component={BottomTabNav}
          name="Home"
          options={{
            title: "ACCUEIL",
            drawerIcon: () => (
              <MaterialIcons name="home" size={30} color="grey" />
            ),
          }}
        />
      </Drawer.Navigator>
  );
};

export default AppNav;
