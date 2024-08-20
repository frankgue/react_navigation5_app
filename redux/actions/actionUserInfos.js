import AsyncStorage from "@react-native-async-storage/async-storage";
import { INFO_USER } from "../constants";

const actionUserInfos = (userId, firstName, lastName, profileImage) => {
  return {
    type: INFO_USER,
    infos: {
      userId,
      firstName,
      lastName,
      profileImage,
    },
  };
};

export const setUserInfos = (firstName, lastName, profileImage) => {
  return async (dispatch) => {
    //Firebase BDD
    const firebaseResp = await fetch(
      "https://react-native-ab348-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lastName: lastName,
          firstName: firstName,
          profileImage: profileImage,
        }),
      }
    );

    if (!firebaseResp.ok) {
      throw new Error("Oups, nous avons un problème.");
    }

    const userData = await firebaseResp.json();
    //   console.log(userData);

    dispatch(actionUserInfos(userData.name, firstName, lastName, profileImage));

    //Save data
    saveToAsyncStorage(userData.name, firstName, lastName, profileImage);
  };
};

const saveToAsyncStorage = async (
  userId,
  firstName,
  lastName,
  profileImage
) => {
  try {
    AsyncStorage.setItem(
      "userProfilInfos",
      JSON.stringify({
        userId,
        firstName,
        lastName,
        profileImage,
      })
    );
  } catch (error) {}
};
