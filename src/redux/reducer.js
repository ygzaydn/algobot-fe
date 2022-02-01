import { ActionTypes } from "./actionTypes";

export const reducer = (state = { lang: "en", user: {} }, action) => {
  switch (action.type) {
    case ActionTypes.SWITCH_LANGUAGE_EN:
      return { ...state, lang: "en" };
    case ActionTypes.SWITCH_LANGUAGE_TR:
      return { ...state, lang: "tr" };
    case ActionTypes.ACTIVATE_USER:
      return {
        ...state,
        user: { ...state.user, subscribed: true, expireDate: action.payload },
      };
    case ActionTypes.LOGIN_USER:
      return { ...state, user: action.payload };
    case ActionTypes.LOGOUT_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};
