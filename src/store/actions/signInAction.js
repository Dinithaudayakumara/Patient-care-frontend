import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const logIn = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START });
    axios
      .post("http://localhost:5004/sign/sign-in", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: LOGIN_FAIL,
          payload: e.response.data.message,
        });
      });
  };
};
