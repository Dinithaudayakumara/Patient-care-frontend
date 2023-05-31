import axios from "axios";

export const GET_ALL_PHARMACISTS_LOADING = "GET_ALL_PHARMACISTS_LOADING";
export const GET_ALL_PHARMACISTS_SUCESS = "GET_ALL_PHARMACISTS_SUCESS";
export const GET_ALL_PHARMACISTS_FAIL = "GET_ALL_PHARMACISTS_FAIL";

export const SET_ADMIN_SELECTED_PHARMACIST = "SET_ADMIN_SELECTED_PHARMACIST";

export const UPDATE_PHARMACIST_START = "UPDATE_PHARMACIST_START";
export const UPDATE_PHARMACIST_SUCESS = "UPDATE_PHARMACIST_SUCESS";
export const UPDATE_PHARMACIST_FAIL = "UPDATE_PHARMACIST_FAIL";

export const CLEAR_PHARMACIST_UPDATE_STATUS = "CLEAR_PHARMACIST_UPDATE_STATUS";

//Create
export const CREATE_PHARMACIST_START = "CREATE_PHARMACIST_START";
export const CREATE_PHARMACIST_SUCCESS = "CREATE_PHARMACIST_SUCCESS";
export const CREATE_PHARMACIST_FAIL = "CREATE_PHARMACIST_FAIL";

export const getAllPharmacists = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_PHARMACISTS_LOADING });
    axios
      .get("http://localhost:5004/pharmacist/view")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_PHARMACISTS_SUCESS,
          payload: response.data.pharmacist,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_PHARMACISTS_FAIL });
      });
  };
};

export const setAdminSelectedPharmacist = (pharmacist) => {
  return (dispatch) => {
    dispatch({ type: SET_ADMIN_SELECTED_PHARMACIST, payload: pharmacist });
  };
};

export const updatePharmacist = (pharmacist) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_PHARMACIST_START });
    axios
      .post("http://localhost:5004/pharmacist/update", { pharmacist })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: UPDATE_PHARMACIST_SUCESS,
          payload: response.data.pharmacist,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: UPDATE_PHARMACIST_FAIL });
      });
  };
};

export const clearPharmacistUpdateStatus = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_PHARMACIST_UPDATE_STATUS });
  };
};

//Create
export const createPharmacist = (pharmacist) => {
  console.log(pharmacist);
  return (dispatch) => {
    dispatch({ type: CREATE_PHARMACIST_START });
    axios
      .post("http://localhost:5004/pharmacist/create", { pharmacist })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: CREATE_PHARMACIST_SUCCESS,
          payload: response.data.pharmacist,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: CREATE_PHARMACIST_FAIL });
      });
  };
};
