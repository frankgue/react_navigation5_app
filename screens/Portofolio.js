import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Portofolio = ({ navigation, route }) => {
  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>PORTOFOLIO</Text>
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

export default Portofolio;