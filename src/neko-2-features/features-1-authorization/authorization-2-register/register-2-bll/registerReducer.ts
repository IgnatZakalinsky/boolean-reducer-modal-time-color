import {registerInitialState} from "./registerInitialState";
import {
    IRegisterActions,
    REGISTER_LOADING,
    REGISTER_ERROR,
    REGISTER_SUCCESS
} from "./registerActions";

export const registerReducer = (state = registerInitialState, action: IRegisterActions) => {
    switch (action.type) {
        case REGISTER_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
                success: false,
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: '',
                success: action.success,
            }
        }
        case REGISTER_ERROR: {
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
