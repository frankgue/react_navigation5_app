import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Exemple = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textParent}>
        <Text>Texte 1</Text>
        <Text>Texte 1</Text>
      </Text>
      <Text style={styles.textParent2}>
        <View>
          <Text>Texte 2</Text>
          <Text>Texte 2</Text>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: 300,
    width: "75%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  textParent: {
    fontWeight: "bold",
    color: "red",
  },
  textParent2: {
    fontWeight: "bold",
    color: "red",
  },
});

export default Exemple;
