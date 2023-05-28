import * as Actions from "../actions/signInAction";

const inisialState = {
  token: "",
  user: {},
  userLoginLoadingStatus: "notStarted",
  loginErrorMessage: "",
};

const signInReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_START:
      return { ...state, userLoginLoadingStatus: "loading" };

    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        userLoginLoadingStatus: "sucess",
        token: action.payload.token,
        user: action.payload.user,
      };

    case Actions.LOGIN_FAIL:
      return {
        ...state,
        userLoginLoadingStatus: "fail",
        loginErrorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default signInReducer;
