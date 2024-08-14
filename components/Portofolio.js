import React, { useLayoutEffect, useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Portofolio = ({ navigation, route }) => {
  const myData = route.params;

  const [count, setCount] = useState(0);

  const handlePress = () => {
    navigation.navigate("Home");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={{ padding: 9 }}
            onPress={() => setCount((prevCount) => prevCount + 1)}
          >
            <Text style={styles.btnText}>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 9 }}
            onPress={() => setCount((prevCount) => prevCount - 1)}
          >
            <Text style={styles.btnText}>-1</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>COUNT: {count}</Text>
      {/* <Text style={styles.text}>PORTOFOLIO</Text> */}
      {/* <Text style={styles.text}>Nom: {myData.name}</Text>
      <Text style={styles.text}>Age: {myData.age}</Text>

      <Button title="Revenir vers Home" onPress={handlePress} /> */}

      {/* <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? "lightseagreen" : "rebeccapurple",
        })}
        onPress={handlePress}
      >
        <Text style={styles.btn}>Vers Home</Text>
      </Pressable> */}
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
