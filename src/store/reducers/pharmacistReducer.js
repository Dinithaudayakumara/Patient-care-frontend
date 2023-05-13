import * as Actions from "../actions/pharmacistAction";

const inisialState = {
  getAllPharmacistListLoading: "notStarted",
  allPharmacistList: [],
  adminSelectedPharmacist: {},
  pharmacistUpdateStatus: "notStarted",
};

const pharmacistReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_PHARMACISTS_LOADING:
      return { ...state, getAllPharmacistListLoading: "loading" };

    case Actions.GET_ALL_PHARMACISTS_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllPharmacistListLoading: "sucess",
        allPharmacistList: action.payload,
      };

    case Actions.GET_ALL_PHARMACISTS_FAIL:
      return {
        ...state,
        getAllPharmacistListLoading: "fail",
        allPharmacistList: [],
      };

    case Actions.SET_ADMIN_SELECTED_PHARMACIST:
      return {
        ...state,
        adminSelectedPharmacist: action.payload,
      };

    case Actions.UPDATE_PHARMACIST_SUCESS:
      return { ...state, pharmacistUpdateStatus: "completed" };

    case Actions.CLEAR_PHARMACIST_UPDATE_STATUS:
      return { ...state, pharmacistUpdateStatus: "notStarted" };

    default:
      return state;
  }
};

export default pharmacistReducer;
