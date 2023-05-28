import { combineReducers } from "redux";
import patientReducer from "./patientReducer";
import doctorReducer from "./doctorReducer";
import pharmacistReducer from "./pharmacistReducer";
import signInReducer from "./signInReducer";

const rootReducer = combineReducers({
  patientReducer,
  doctorReducer,
  pharmacistReducer,
  signInReducer,
});

export default rootReducer;
