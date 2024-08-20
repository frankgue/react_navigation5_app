import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
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
import { useDispatch } from "react-redux";
import { actionLogin, actionSignup } from "../redux/actions/actionAuth";
import WaitScreen from "./WaitScreen";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const [error, setError] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (error != null) {
      Alert.alert("ERREUR", error, [{ text: "OK" }]);
    }
  }, [error]);

  const load = async () => {
    const userDetailsStr = await AsyncStorage.getItem("userDetails");

    if (userDetailsStr !== null) {
      const userDetailsObj = JSON.parse(userDetailsStr);
      const { token, userId, dateTokenExpire } = userDetailsObj;
      const expireDate = new Date(dateTokenExpire);

      if (expireDate <= new Date() || !token || !userId) {
        setIsAuth(true);
        return;
      }

      navigation.navigate("Home");
      setIsAuth(true);
    } else {
      setIsAuth(true);
    }
  };

  useLayoutEffect(() => {
    load();
  }, []);

  const handleSubmit = async () => {
    if (email.length > 0 && password.length > 0) {
      if (isSignup) {
        setError(null);
        setisLoading(true);
        try {
          await dispatch(actionSignup(email, password));
          navigation.replace("ProfileInfos");
          setisLoading(false);
        } catch (error) {
          setError(error.message);
          setisLoading(false);
        }
      } else {
        setError(null);
        setisLoading(true);
        try {
          await dispatch(actionLogin(email, password));
          navigation.navigate("Home");
          setisLoading(false);
        } catch (error) {
          setError(error.message);
          setisLoading(false);
        }
      }
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  if (isAuth) {
    return (
      <LinearGradient style={styles.container} colors={["#1A91DA", "#FFF"]}>
        <View style={styles.logo}>
          {/* {isLoading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <AntDesign name="twitter" size={80} color="white" />
          )} */}
          <AntDesign name="twitter" size={80} color="white" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>
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

          {isLoading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <TouchableOpacity style={styles.touchable} onPress={handleSubmit}>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>Valider</Text>
              </View>
            </TouchableOpacity>
          )}

          <Pressable onPress={() => setIsSignup((prevState) => !prevState)}>
            <Text style={{ textAlign: "center", marginTop: 9 }}>
              {isSignup ? "Vers Connexion" : "Vers Inscription"}
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    );
  }

  return <WaitScreen />;
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
