import {forgotInitialState} from "./forgotInitialState";
import {IForgotActions, FORGOT_LOADING, FORGOT_ERROR, FORGOT_SUCCESS} from "./forgotActions";

export const forgotReducer = (state = forgotInitialState, action: IForgotActions) => {
    switch (action.type) {
        case FORGOT_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
                success: false,
            }
        }
        case FORGOT_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                success: action.success,
            }
        }
        case FORGOT_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
                success: false,
            }
        }

        default: {
            return state;
        }
    }
};
