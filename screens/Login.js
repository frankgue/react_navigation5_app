import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);

  // const load = async () => {
  //   try {
  //     let userDataJsonValue = await AsyncStorage.getItem("LoginDetails");
  //     // let name = await AsyncStorage.getItem("userData");
  //     if (userDataJsonValue !== null) {
  //       const user = JSON.parse(userDataJsonValue);
  //       navigation.navigate("Home");
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // useEffect(() => {
  //   load();
  // }, []);

  return (
    <LinearGradient style={styles.container} colors={["#1A91DA", "#FFF"]}>
      <View style={styles.logo}>
        <AntDesign name="twitter" size={80} color="white" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>
          {" "}
          {isSignup ? "Inscription" : "Connexion"}
        </Text>
        <TextInput
          placeholder="Votre Email"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          placeholder="Votre mot de passe"
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.touchable} onPress={() => {}}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Valider</Text>
          </View>
        </TouchableOpacity>

        <Pressable onPress={() => setIsSignup((prevState) => !prevState)}>
          <Text style={{ textAlign: "center", marginTop: 9 }}>
            {isSignup ? "Vers Connexion" : "Vers Inscription"}
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#1A91DA",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 50,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 50,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 9,
    textAlign: "center",
    fontSize: 19,
    marginVertical: 10,
  },
  touchable: {
    marginVertical: 9,
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  btnContainer: {
    backgroundColor: "turquoise",
    borderRadius: 7,
    padding: 9,
  },
  btnText: {
    fontSize: 19,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default Login;
