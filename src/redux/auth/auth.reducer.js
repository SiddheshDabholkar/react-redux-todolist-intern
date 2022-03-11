import { REGISTER_USER, SIGNIN_USER, LOGOUT_USER } from "./auth.types";
import { getInitialState } from "../../utils/getInitialState";

const intialState = {
  isLoggedIn: false,
  users: [],
  user: {},
};

export const authReducer = (
  state = getInitialState("auth", intialState),
  action
) => {
  console.log("state", state);
  switch (action.type) {
    case REGISTER_USER:
      state.users.push(action.payload);
      localStorage.setItem("auth", JSON.stringify(state));
      return state;
    case SIGNIN_USER:
      const { name, password } = action.payload;
      const registeredUser = state.users.filter((usr) => {
        return usr.name === name && usr.password === password;
      });
      if (registeredUser.length > 0) {
        const newregisteredUser = {
          ...state,
          isLoggedIn: true,
          user: registeredUser[0],
        };
        localStorage.setItem("auth", JSON.stringify(newregisteredUser));
        return newregisteredUser;
      } else {
        const newUsr = {
          ...state,
          isLoggedIn: false,
        };
        localStorage.setItem("auth", JSON.stringify(newUsr));
        return newUsr;
      }
    case LOGOUT_USER:
      localStorage.removeItem("auth");
      const removingUsr = {
        ...state,
        isLoggedIn: false,
        user: {},
      };
      return removingUsr;
    default:
      return state;
  }
};
