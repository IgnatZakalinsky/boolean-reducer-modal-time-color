import {registerInitialState} from "./registerInitialState";
import {IRegisterActions, REGISTER} from "./registerActions";

export const registerReducer = (state = registerInitialState, action: IRegisterActions) => {
    switch (action.type) {
        case REGISTER: {
            return {
                ...state,
            }
        }

        default: {
            return state;
        }
    }
};
