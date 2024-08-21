import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { fetchInSLite } from "../database/db";

const Portofolio = ({ navigation, route }) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const { lastName, firstName, profileImage } = route.params;
  const fetchUserInfos = async () => {
    try {
      const userData = await fetchInSLite();

      const { latitude, longitude } = userData[0];

      setLatitude(latitude);
      setLongitude(longitude);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchUserInfos();
  }, []);

  const goToMap = () => {
    navigation.navigate("Map", {
      latitude: latitude,
      longitude: longitude,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilInfos}>
        <Image source={{ uri: profileImage }} style={styles.smallProfilImage} />
        <Text style={styles.profilName}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.profilName}>lat: {latitude}</Text>
        <Text style={styles.profilName}>long: {longitude}</Text>
      </View>
      <Button title="Voir la carte" onPress={goToMap} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profilInfos: {
    backgroundColor: "#1A91DA",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  smallProfilImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    margin: 9,
    borderWidth: 6,
    borderColor: "white",
  },
  profilName: {
    color: "white",
    fontSize: 25,
  },
});

export default Portofolio;
