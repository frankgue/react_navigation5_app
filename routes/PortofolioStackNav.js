import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Portofolio from "../screens/Portofolio";

const PortofolioStack = createStackNavigator();

const PortofolioStackScreen = () => {
  return (
    <PortofolioStack.Navigator>
      <PortofolioStack.Screen
        name="profil"
        component={Portofolio}
        options={{ title: "Portofolio", headerShown: false }}
      />
    </PortofolioStack.Navigator>
  );
};

export default PortofolioStackScreen;
