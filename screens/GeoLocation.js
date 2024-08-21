import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as Location from "expo-location";
import * as SQLite from "expo-sqlite";
import { addUserGeo, sqliteINit } from "../database/db";

const GeoLocation = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isLocating, setIsLocating] = useState(false);

  const handleGeolocation = async () => {
    // const db = await SQLite.openDatabaseAsync("userGeo");

    // await db.execAsync(`
    // PRAGMA journal_mode = WAL;
    // CREATE TABLE IF NOT EXISTS userGeo (id INTEGER PRIMARY KEY NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL);
    // `);

    const db = await sqliteINit();

    console.log(db);

    //Permission (objet)
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Géolocalisation refusée!");
      return;
    }

    //Verifier geoloc
    try {
      setIsLocating(true);
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      /*
      
      {"coords": {"accuracy": 1414, "altitude": 38.08832550048828, "altitudeAccuracy": 53.6822624206543, "heading": -1, "latitude": 4.1307454099999985, "longitude": 9.782418249999996, "speed": -1}, "timestamp": 1724198022380.082} 
      
      */

      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setIsLocating(false);
    } catch (error) {
      setErrorMsg("Probleme de geolocalisation!");
    }
  };

  const saveToSQLite = async (latitude, longitude) => {
    try {
      const dbInsertResult = await addUserGeo(latitude, longitude);
      console.log("====================================");
      console.log(dbInsertResult);
      console.log("====================================");
      /* 
      
      {"_invoke": [Function anonymous], "changes": 1, "getAllAsync": [Function bound getAllAsync], "getFirstAsync": [Function bound getFirstAsync], "lastInsertRowId": 2, "resetAsync": [Function bound resetAsync]}
      
      
      */
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (latitude !== null && longitude !== null) {
      //Enregistrer en BDD
      await saveToSQLite(latitude, longitude);
      navigation.navigate("Home");
    } else {
      alert("Veuillez indiquer votre géolocalisation");
    }
  };

  let geoLocText = "";
  if (errorMsg) {
    geoLocText = errorMsg;
  } else if (latitude !== null && longitude !== null) {
    geoLocText = "OK";
  }

  return (
    <View style={styles.container}>
      {isLocating && <ActivityIndicator size="large" color="white" />}

      <TouchableOpacity style={styles.touchable} onPress={handleGeolocation}>
        <View style={styles.globalContainer}>
          <Text style={{ color: "white", marginBottom: 16, fontSize: 19 }}>
            Cliquez pour vous géolocaliser
          </Text>
          <Entypo name="globe" size={120} color="white" />
        </View>
      </TouchableOpacity>

      {geoLocText === "OK" && (
        <TouchableOpacity style={styles.touchable} onPress={handleSubmit}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Bravo, vous pouvez valider.</Text>
          </View>
        </TouchableOpacity>
      )}
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
  touchable: {
    marginVertical: 9,
  },
  globalContainer: {
    alignItems: "center",
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

export default GeoLocation;
