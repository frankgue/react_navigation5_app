import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const InteractiveMap = ({ route }) => {
  const regionInfos = {
    latitude: route.params.latitude,
    longitude: route.params.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const markerCoord = {
    latitude: route.params.latitude,
    longitude: route.params.longitude,
  };

  return (
    <MapView style={styles.map} region={regionInfos}>
      <Marker
        // key={index}
        coordinate={markerCoord}
        title="Vous êtes ici"
        description="Vous êtes ici"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default InteractiveMap;
