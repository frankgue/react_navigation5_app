import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { setUserInfos } from "../redux/actions/actionUserInfos";
import * as ImagePicker from "expo-image-picker";

const ProfileInfos = ({ navigation }) => {
  const dispatch = useDispatch();

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (lastName.length > 0 && firstName.length > 0) {
      if (profileImage.length === 0) {
        setProfileImage(
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        );
      }
      setIsLoading(true);

      await dispatch(setUserInfos(firstName, lastName, profileImage));

      navigation.replace("GeoLocation");
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    // console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }

    /*
    
    {"assets": [{"assetId": null, "base64": null, "duration": null, "exif": null, "fileName": "f43108ea-c818-4583-97e2-97a1e625677d.png", "fileSize": 188555, "height": 540, "mimeType": "image/png", "rotation": null, "type": "image", 
"uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Ffirst-project-b8bb57b8-a38f-49e9-8dc7-b1de662aef52/ImagePicker/f43108ea-c818-4583-97e2-97a1e625677d.png", "width": 720}], "canceled": false}
    
    */
  };

  return (
    <View style={styles.container}>
      <ScrollView>
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

          {/* Photo Picker */}
          <View style={styles.photoContainer}>
            <View style={styles.wrapper}>
              <Image style={styles.photo} source={{ uri: profileImage }} />
            </View>
          </View>
          <Button
            title="Sélectionner une photo"
            color="yellow"
            onPress={pickImage}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A91DA",
    flex: 1,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 50,
    paddingVertical: 50,
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
  photoContainer: {
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 9,
    borderColor: "white",
    borderWidth: 1,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
});

export default ProfileInfos;
