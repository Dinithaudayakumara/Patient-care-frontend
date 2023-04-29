import axios from "axios";

export const GET_ALL_DOCTORS_LOADING = "GET_ALL_DOCTORS_LOADING";
export const GET_ALL_DOCTORS_SUCESS = "GET_ALL_DOCTORS_SUCESS";
export const GET_ALL_DOCTORS_FAIL = "GET_ALL_DOCTORS_FAIL";

export const getAllDoctors = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_DOCTORS_LOADING });
    axios
      .get("http://localhost:5004/doctor/view")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_DOCTORS_SUCESS,
          payload: response.data.doctor,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_DOCTORS_FAIL });
      });
  };
};
