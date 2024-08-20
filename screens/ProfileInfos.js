import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

const ProfileInfos = ({ navigation }) => {
  const dispatch = useDispatch();

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://cdn.pixabay.com/photo/2024/04/28/20/56/lion-8726314_960_720.png"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (lastName.length > 0 && firstName.length > 0) {
      if (profileImage.length == 0) {
        setProfileImage(
          "https://cdn.pixabay.com/photo/2024/04/28/20/56/lion-8726314_960_720.png"
        );
      }
      setIsLoading(true);

      dispatch(setUserInfos(firstName, lastName, profileImage));

      navigation.replace("Home");
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Indiquez vos informations</Text>
        <TextInput
          placeholder="Votre Nom"
          style={styles.input}
          onChangeText={(text) => setLastName(text)}
        />

        <TextInput
          placeholder="Votre Prenom"
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
        />

        <TextInput
          placeholder="Votre Photo de profil"
          value={profileImage}
          style={styles.input}
          onChangeText={(text) => setProfileImage(text)}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A91DA",
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

export default ProfileInfos;
