import { INFO_USER } from "../constants";

const initialState = {
  userId: "",
  firstName: "",
  lastName: "",
  profileImage: "",
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO_USER:
      return {
        userId: action.infos.userId,
        firstName: action.infos.firstName,
        lastName: action.infos.lastName,
        profileImage: action.infos.profileImage,
      };

    default:
      return state;
  }
};

export default userInfoReducer;
