import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Listes = ({ navigation, route }) => {
  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Listes</Text>
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

const ListesStack = createStackNavigator();

const ListesStackScreen = () => {
  return (
    <ListesStack.Navigator>
      <ListesStack.Screen
        name="Listes"
        component={Listes}
        options={{ title: "Listes", headerShown: false }}
      />
    </ListesStack.Navigator>
  );
};

// export default ListesStackScreen;
export default Listes;
