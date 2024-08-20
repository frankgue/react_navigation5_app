import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const WaitScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Patienter ...</Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#1A91DA",
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    maginBottom: 30,
  },
});

export default WaitScreen;
