import axios from "axios";

export const GET_ALL_PATIENTS_LOADING = "GET_ALL_PATIENTS_LOADING";
export const GET_ALL_PATIENTS_SUCESS = "GET_ALL_PATIENTS_SUCESS";
export const GET_ALL_PATIENTS_FAIL = "GET_ALL_PATIENTS_FAIL";

export const SET_ADMIN_SELECTED_PATIENT = "SET_ADMIN_SELECTED_";

export const UPDATE_PATIENT_START = "UPDATE_PATIENT_START";
export const UPDATE_PATIENT_SUCESS = "UPDATE_PATIENT_SUCESS";
export const UPDATE_PATIENT_FAIL = "UPDATE_PATIENT_FAIL";

export const CLEAR_PATIENT_UPDATE_STATUS = "CLEAR_PATIENT_UPDATE_STATUS";

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

export const setAdminSelectedPatient = (patient) => {
  return (dispatch) => {
    dispatch({ type: SET_ADMIN_SELECTED_PATIENT, payload: patient });
  };
};

export const updatePatient = (patient) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_PATIENT_START });
    axios
      .post("http://localhost:5004/patient/update", { patient })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: UPDATE_PATIENT_SUCESS,
          payload: response.data.patient,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: UPDATE_PATIENT_FAIL });
      });
  };
};

export const clearPatientUpdateStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_PATIENT_UPDATE_STATUS });
  };
};
