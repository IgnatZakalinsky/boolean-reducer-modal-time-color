import {signInInitialState} from "./signInInitialState";
import {
    ISignInActions,
    SIGN_IN_LOADING,
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS
} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: ISignInActions) => {
    switch (action.type) {
        case SIGN_IN_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
                success: false,
            }
        }
        case SIGN_IN_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                success: action.success,
            }
        }
        case SIGN_IN_ERROR: {
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
