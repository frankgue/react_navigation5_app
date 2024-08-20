import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Home = ({ navigation, route }) => {
  const authUser = useSelector((state) => state.users);
  const infosUser = useSelector((state) => state.infos);
  console.log(infosUser);

  const remove = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? "lightseagreen" : "rebeccapurple",
        })}
        onPress={remove}
      >
        <Text style={styles.btn}>Effacer</Text>
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
