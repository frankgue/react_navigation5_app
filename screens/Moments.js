import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Moments = ({ navigation, route }) => {
  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Moments</Text>
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

const MomentsStack = createStackNavigator();

const MomentsStackScreen = () => {
  return (
    <MomentsStack.Navigator>
      <MomentsStack.Screen
        name="Moments"
        component={Moments}
        options={{ title: "Moments", headerShown: false }}
      />
    </MomentsStack.Navigator>
  );
};

// export default MomentsStackScreen;

export default Moments;
