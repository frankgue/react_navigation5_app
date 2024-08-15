import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Sujets = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sujets</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
  btn: {
    padding: 12,
    color: "white",
  },
  btnText: {
    color: "white",
    fontSize: 19,
    paddingBottom: 9,
  },
  btnContainer: {
    flexDirection: "row",
  },
});

const SujetsStack = createStackNavigator();

const SujetsStackScreen = () => {
  return (
    <SujetsStack.Navigator>
      <SujetsStack.Screen
        name="Sujets"
        component={Sujets}
        options={{ title: "Sujets", headerShown: false }}
      />
    </SujetsStack.Navigator>
  );
};

// export default SujetsStackScreen;

export default Sujets;
