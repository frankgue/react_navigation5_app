import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation, route }) => {
  const handlePress = () => {
    navigation.navigate("Profil");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? "lightseagreen" : "rebeccapurple",
        })}
        onPress={handlePress}
      >
        <Text style={styles.btn}>Vers Portofolio</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
  btn: {
    padding: 12,
    color: "#fff",
  },
});

export default Home;
