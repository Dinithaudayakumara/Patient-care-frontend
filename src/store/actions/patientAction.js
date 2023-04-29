import axios from "axios";

export const GET_ALL_PATIENTS_LOADING = "GET_ALL_PATIENTS_LOADING";
export const GET_ALL_PATIENTS_SUCESS = "GET_ALL_PATIENTS_SUCESS";
export const GET_ALL_PATIENTS_FAIL = "GET_ALL_PATIENTS_FAIL";

export const getAllPatients = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_PATIENTS_LOADING });
    axios
      .get("http://localhost:5004/patient/view")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_PATIENTS_SUCESS,
          payload: response.data.patient,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_PATIENTS_FAIL });
      });
  };
};
