import { REGISTER_USER, SIGNIN_USER, LOGOUT_USER } from "./auth.types";

export const register = (user) => {
  return {
    type: REGISTER_USER,
    payload: user,
  };
};

export const signin = (user) => {
  return {
    type: SIGNIN_USER,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};
