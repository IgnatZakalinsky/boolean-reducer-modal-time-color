import {forgotInitialState} from "./forgotInitialState";
import {IForgotActions, FORGOT} from "./forgotActions";

export const forgotReducer = (state = forgotInitialState, action: IForgotActions) => {
    switch (action.type) {
        case FORGOT: {
            return {
                ...state,
            }
        }

        default: {
            return state;
        }
    }
};
