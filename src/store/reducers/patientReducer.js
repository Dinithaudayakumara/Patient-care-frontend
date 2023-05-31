import * as Actions from "../actions/patientAction";

const inisialState = {
  getAllPatientListLoading: "notStarted",
  allPatientList: [],
  adminSelectedPatient: {},
  patientUpdateStatus: "notStarted",
  patientCreateStatus: "notStarted",
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

    case Actions.SET_ADMIN_SELECTED_PATIENT:
      return {
        ...state,
        adminSelectedPatient: action.payload,
      };

    case Actions.UPDATE_PATIENT_SUCESS:
      return { ...state, patientUpdateStatus: "completed" };

    case Actions.CLEAR_PATIENT_UPDATE_STATUS:
      return { ...state, patientUpdateStatus: "notStarted" };

    case Actions.CREATE_PATIENT_START:
      return { ...state, patientCreateStatus: "loading" };

    case Actions.CREATE_PATIENT_SUCCESS:
      return {
        ...state,
        patientCreateStatus: "success",
      };

    case Actions.CREATE_PATIENT_FAIL:
      return { ...state, patientCreateStatus: "fail" };

    default:
      return state;
  }
};

export default patientReducer;
