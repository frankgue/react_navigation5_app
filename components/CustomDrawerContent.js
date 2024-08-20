import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, View } from "react-native";
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Switch,
  Text,
  Title,
  TouchableRipple,
} from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomDrawerContent = (props) => {
  const [isDark, setIsDark] = useState(false);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [isAuth, setIsAuth] = useState(false);

  const toggleDarkTheme = () => {
    setIsDark(!isDark);
  };

  const load = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem("userProfilInfos");

      if (jsonValue !== null) {
        let user = JSON.parse(jsonValue);

        setLastName(user.lastName);
        setFirstName(user.firstName);
        setProfileImage(user.profileImage);
        setIsAuth(true);
      }
    } catch (error) {
      Alert.alert(error, "Nous avons un probleme", [
        {
          text: "OK",
          onPress: () => {
            props.navigation.navigate("Login");
          },
        },
      ]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContentContainer}>
          <View style={styles.userInfoContainer}>
            {isAuth ? (
              <View style={styles.userInfoDetails}>
                <Avatar.Image
                  size={80}
                  source={{
                    uri: profileImage,
                  }}
                />
                <View style={styles.name}>
                  <Title style={styles.title}>
                    {firstName.concat(" ", lastName)}
                  </Title>
                  <Caption style={styles.caption}>
                    @{firstName.concat(lastName)}
                  </Caption>
                </View>
              </View>
            ) : (
              <ActivityIndicator size="large" color="#1A91DA" />
            )}

            <View style={styles.followers}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.section]}>
                  24
                </Paragraph>
                <Caption style={styles.caption}>Abonnements</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.section]}>
                  48
                </Paragraph>
                <Caption style={styles.caption}>abonnés</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Profil"
              icon={({ color, size }) => (
                <MaterialIcons name="face" size={size} color={color} />
              )}
              onPress={() => props.navigation.navigate("Profil")}
            />
            <DrawerItem
              label="Listes"
              icon={({ color, size }) => (
                <MaterialIcons name="list-alt" size={size} color={color} />
              )}
              onPress={() => props.navigation.navigate("Listes")}
            />
            <DrawerItem
              label="Sujets"
              icon={({ color, size }) => (
                <MaterialIcons name="comment" size={size} color={color} />
              )}
              onPress={() => props.navigation.navigate("Sujets")}
            />
            <DrawerItem
              label="Signets"
              icon={({ color, size }) => (
                <MaterialIcons
                  name="bookmark-border"
                  size={size}
                  color={color}
                />
              )}
              onPress={() => props.navigation.navigate("Signets")}
            />
            <DrawerItem
              label="Moments"
              icon={({ color, size }) => (
                <MaterialIcons name="flash-on" size={size} color={color} />
              )}
              onPress={() => props.navigation.navigate("Moments")}
            />
          </Drawer.Section>
          <Drawer.Section title="Réglages" style={styles.reglages}>
            <DrawerItem
              label="Paramètres et confidentialités"
              icon={({ color, size }) => (
                <MaterialIcons name="settings" size={size} color={color} />
              )}
              onPress={() => props.navigation.navigate("Settings")}
            />
            <TouchableRipple onPress={() => toggleDarkTheme()}>
              <View style={styles.settings}>
                <Text>Mode Sombre</Text>
                <View pointerEvents="none">
                  <Switch value={isDark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.logOutSection}>
        <DrawerItem
          label="Déconnexion"
          icon={({ color, size }) => (
            <MaterialIcons name="logout" size={size} color={color} />
          )}
          onPress={() => alert("Déconnecté")}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContentContainer: {
    flex: 1,
  },
  userInfoContainer: {
    paddingLeft: 21,
  },
  userInfoDetails: {
    marginTop: 15,
  },
  name: {
    marginTop: 15,
    justifyContent: "center",
  },
  title: {
    marginTop: 5,
    fontSize: 19,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 15,
  },
  followers: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  paragraph: {
    fontWeight: "bold",
  },
  drawerSection: {
    marginTop: 19,
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
  },
  settings: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  logOutSection: {
    marginBottom: 19,
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
  },
});

export default CustomDrawerContent;
