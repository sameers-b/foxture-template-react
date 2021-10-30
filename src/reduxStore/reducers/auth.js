import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT,
  GET_MERCHANT,
} from "../types";

export const initialState = {
  authToken: null,
  isAuthenticated: false,
  isError: false,
  user: null,
  registerSuccess: false,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userId: payload.id,
        authToken: payload.token,
        isAuthenticated: true,
        isError: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isError: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isError: true,
      };
    case GET_MERCHANT:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        authToken: null,
        isAuthenticated: false,
        isError: false,
        user: null,
      };
    default:
      return state;
  }
};

export default auth;
