import {nekoInitialState} from "./nekoInitialState";
import {INekoActions, NEKO_ERROR, NEKO_LOADING, NEKO_SET_NAME} from "./nekoActions";

export const nekoReducer = (state = nekoInitialState, action: INekoActions) => {
    switch (action.type) {
        case NEKO_LOADING: {
            return {
                ...state,
                loading: action.loading,
                error: '',
            }
        }
        case NEKO_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }

        case NEKO_SET_NAME: {
            return {
                ...state,
                name: action.name,
                loading: false,
                error: '',
            }
        }

        default: {
            return state;
        }
    }
};
