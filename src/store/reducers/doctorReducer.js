import * as Actions from "../actions/doctorAction";

const inisialState = {
  getAllDoctorListLoading: "notStarted",
  allDoctorList: [],
};

const doctorReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_DOCTORS_LOADING:
      return { ...state, getAllDoctorListLoading: "loading" };

    case Actions.GET_ALL_DOCTORS_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllDoctorListLoading: "sucess",
        allDoctorList: action.payload,
      };

    case Actions.GET_ALL_DOCTORS_FAIL:
      return {
        ...state,
        getAllDoctorListLoading: "fail",
        allDoctorList: [],
      };

    default:
      return state;
  }
};

export default doctorReducer;
