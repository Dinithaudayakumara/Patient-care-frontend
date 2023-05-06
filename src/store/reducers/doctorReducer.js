import * as Actions from "../actions/doctorAction";

const inisialState = {
  getAllDoctorListLoading: "notStarted",
  allDoctorList: [],
  adminSelectedDoctor: {},
  doctorUpdateStatus: "notStarted",
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

    case Actions.SET_ADMIN_SELECTED_DOCTOR:
      return {
        ...state,
        adminSelectedDoctor: action.payload,
      };

    case Actions.UPDATE_DOCTOR_SUCESS:
      return { ...state, doctorUpdateStatus: "completed" };

    case Actions.CLEAR_DOCTOR_UPDATE_STATUS:
      return { ...state, doctorUpdateStatus: "notStarted" };

    default:
      return state;
  }
};

export default doctorReducer;
