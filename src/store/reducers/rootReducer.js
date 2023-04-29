import { combineReducers } from "redux";
import patientReducer from "./patientReducer";
import doctorReducer from "./doctorReducer";
import pharmacistReducer from "./pharmacistReducer";

const rootReducer = combineReducers({
  patientReducer,
  doctorReducer,
  pharmacistReducer,
});

export default rootReducer;
