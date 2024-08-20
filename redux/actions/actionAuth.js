//Inscription
import { AUTH_USER } from "./../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const actionSignup = (email, password) => {
  return async (dispatch) => {
    ///HTTP request
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGoiDkMa1qC_7DvS5Z3tqIOQIQ6Q7Xy_E",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    //Response
    if (!response.ok) {
      //Message d'erreur
      const responseError = await response.json();
      const errorMsg = responseError.error.message;

      let customMsg =
        "Oups, nous avons un problème lors de la creation de compte.";

      if (errorMsg === "EMAIL_EXISTS") {
        customMsg = "Cette adresse email eiste déjà!";
      } else if (errorMsg === "TOO_MANY_ATTEMPTS_TRY_LATER") {
        customMsg = "Trop de tentatives, veuillez réessaye plus tard!";
      }

      throw new Error(customMsg);
    }
    const dataObj = await response.json();
    //Dispatch action
    dispatch(actionAuthUser(dataObj.localId, dataObj.idToken));

    //AsyncStorage
    const expiresInMilliSeconds = parseInt(dataObj.expiresIn) * 1000;
    const expiresDate = new Date().getTime() + expiresInMilliSeconds;
    const dateTokenExpire = new Date(expiresDate).toISOString();
    actionSaveToAsyncStorage(dataObj.idToken, dataObj.localId, dateTokenExpire);
  };
};

//Connexion
export const actionLogin = (email, password) => {
  return async (dispatch) => {
    ///HTTP request
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBGoiDkMa1qC_7DvS5Z3tqIOQIQ6Q7Xy_E",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    //Response
    if (!response.ok) {
      //Message d'erreur
      const responseError = await response.json();
      const errorMsg = responseError.error.message;

      let customMsg = "Oups, nous avons un problème lors de la connexion.";

      if (errorMsg === "EMAIL_NOT_FOUND") {
        customMsg = "Adressee email introuvable!";
      } else if (errorMsg === "INVALID_LOGIN_CREDENTIALS") {
        customMsg = "Mot de passe incorrect!";
      } else if (errorMsg === "TOO_MANY_ATTEMPTS_TRY_LATER") {
        customMsg = "Trop de tentative veuillez reessayer plustard!";
      }

      throw new Error(customMsg);
    }
    const dataObj = await response.json();

    //Dispatch action
    dispatch(actionAuthUser(dataObj.localId, dataObj.idToken));

    //AsyncStorage
    const expiresInMilliSeconds = parseInt(dataObj.expiresIn) * 1000;
    const expiresDate = new Date().getTime() + expiresInMilliSeconds;
    const dateTokenExpire = new Date(expiresDate).toISOString();
    actionSaveToAsyncStorage(dataObj.idToken, dataObj.localId, dateTokenExpire);
  };
};

export const actionLogout = ()  => {
  
}

//Enregistrer la data (token, userId, dateTokenExpire )
const actionSaveToAsyncStorage = async (token, userId, dateTokenExpire) => {
  await AsyncStorage.setItem(
    "userDetails",
    JSON.stringify({
      token,
      userId,
      dateTokenExpire,
    })
  );
};

//Auth action
const actionAuthUser = (userId, token) => {
  return {
    type: AUTH_USER,
    userId: userId,
    token: token,
  };
};
