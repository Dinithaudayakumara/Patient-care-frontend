import axios from "axios";

export const GET_ALL_PHARMACISTS_LOADING = "GET_ALL_PHARMACISTS_LOADING";
export const GET_ALL_PHARMACISTS_SUCESS = "GET_ALL_PHARMACISTS_SUCESS";
export const GET_ALL_PHARMACISTS_FAIL = "GET_ALL_PHARMACISTS_FAIL";

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
