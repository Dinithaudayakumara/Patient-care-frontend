import * as Actions from "../actions/pharmacistAction";

const inisialState = {
  getAllPharmacistListLoading: "notStarted",
  allPharmacistList: [],
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

    default:
      return state;
  }
};

export default pharmacistReducer;
