import { combineReducers } from "redux";
import patientReducer from "./patientReducer";
import doctorReducer from "./doctorReducer";

const rootReducer = combineReducers({
  patientReducer,
  doctorReducer,
});

export default rootReducer;
