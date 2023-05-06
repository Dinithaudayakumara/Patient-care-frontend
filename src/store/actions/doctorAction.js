import axios from "axios";

export const GET_ALL_DOCTORS_LOADING = "GET_ALL_DOCTORS_LOADING";
export const GET_ALL_DOCTORS_SUCESS = "GET_ALL_DOCTORS_SUCESS";
export const GET_ALL_DOCTORS_FAIL = "GET_ALL_DOCTORS_FAIL";

export const SET_ADMIN_SELECTED_DOCTOR = "SET_ADMIN_SELECTED_DOCTOR";

export const UPDATE_DOCTOR_START = "UPDATE_DOCTOR_START";
export const UPDATE_DOCTOR_SUCESS = "UPDATE_DOCTOR_SUCESS";
export const UPDATE_DOCTOR_FAIL = "UPDATE_DOCTOR_FAIL";

export const CLEAR_DOCTOR_UPDATE_STATUS = "CLEAR_DOCTOR_UPDATE_STATUS";

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

export const setAdminSelectedDoctor = (doctor) => {
  return (dispatch) => {
    dispatch({ type: SET_ADMIN_SELECTED_DOCTOR, payload: doctor });
  };
};

export const updateDoctor = (doctor) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_DOCTOR_START });
    axios
      .post("http://localhost:5004/doctor/update", { doctor })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: UPDATE_DOCTOR_SUCESS, payload: response.data.doctor });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: UPDATE_DOCTOR_FAIL });
      });
  };
};

export const clearDoctorUpdateStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_DOCTOR_UPDATE_STATUS });
  };
};
