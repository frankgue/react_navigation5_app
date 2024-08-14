import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Person = ({ name, age, children }) => {
  return (
    <View>
      {age ? (
        <Text style={styles.textOne}>
          Je suis : {name}, et j'ai {age} ans
        </Text>
      ) : (
        <Text style={styles.textOne}>
          Je suis : {name}, je suis un {children}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginTop: 50, flexDirection: "column", fontSize: 30 },
  viewOne: { backgroundColor: "green" },
  viewTwo: { backgroundColor: "red" },
  textOne: { fontFamily: "Antonio", marginEnd: 15, fontWeight: "bold" },
});


export default Person;