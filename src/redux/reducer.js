import { ActionTypes } from "./actionTypes";

export const reducer = (state = { lang: "en" }, action) => {
    switch (action.type) {
        case ActionTypes.SWITCH_LANGUAGE_EN:
            return { ...state, lang: "en" };
        case ActionTypes.SWITCH_LANGUAGE_TR:
            return { ...state, lang: "tr" };
        default:
            return state;
    }
};
