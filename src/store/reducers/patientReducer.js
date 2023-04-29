import * as Actions from "../actions/patientAction";

const inisialState = {
  getAllPatientListLoading: "notStarted",
  allPatientList: [],
};

const patientReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_PATIENTS_LOADING:
      return { ...state, getAllPatientListLoading: "loading" };

    case Actions.GET_ALL_PATIENTS_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllPatientListLoading: "sucess",
        allPatientList: action.payload,
      };

    case Actions.GET_ALL_PATIENTS_FAIL:
      return {
        ...state,
        getAllPatientListLoading: "fail",
        allPatientList: [],
      };

    default:
      return state;
  }
};

export default patientReducer;
