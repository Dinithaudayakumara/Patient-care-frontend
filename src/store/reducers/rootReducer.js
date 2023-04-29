import { combineReducers } from "redux";
import patientReducer from "./patientReducer";

const rootReducer = combineReducers({
  patientReducer,
});

export default rootReducer;
