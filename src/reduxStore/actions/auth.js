import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT,
  GET_MERCHANT,
} from "../types";

export const loginSuccess = (response) => async (dispatch) => {
  try {
    // let res = await fetch(`http://localhost:8000/api/user/login`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });
    // // }
    // const response = await res.json();

    // if (!response.success) {
    //   dispatch({
    //     type: LOGIN_ERROR,
    //   });
    // } else {
    //   localStorage.setItem("token", response.token);

    //   dispatch({
    //     type: LOGIN_SUCCESS,
    //     payload: response,
    //   });
    // }

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response,
    });
  } catch (err) {}
};

export const getUserFromToken = (token) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:8000/api/user/getUserFromToken", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const response = await res.json();

    if (!response.success) {
      dispatch({
        type: LOGIN_ERROR,
      });
    } else {
      dispatch({
        type: GET_MERCHANT,
        payload: response.data, // payload : id,token,role,isLoggedIn
      });
    }
  } catch (err) {}
};
//

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      const res = await fetch("http://localhost:8000/api/user/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
        }),
      });

      const response = await res.json();

      if (!response.success) {
        dispatch({
          type: REGISTER_FAILED,
          payload: res.data,
        });
      } else {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      console.log("error here-", err.response);
    }
  };

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};
