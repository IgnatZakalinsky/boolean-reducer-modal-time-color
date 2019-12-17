import {emailValidator} from "../../../../features-2-helpers/emailValidator";
import {passwordValidator} from "../../../../features-2-helpers/passwordValidator";
import {ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../../neko-1-main/main-2-bll/store";
import {IBooleanActions} from "../../../../features-4-boolean-reducer/booleanActions";
import {registerError} from "./registerBooleanCallbacks";
import {register} from "../registerThunk";

type ExtraArgument = {};

export const registerCallback = (
    dispatch: ThunkDispatch<IAppStore, ExtraArgument, IBooleanActions>,
    email: string,
    password: string,
    password2: string,
) => () => {
    if (!emailValidator(email)) {
        registerError(dispatch, 'Email not valid!');
    } else if (!passwordValidator(password)) {
        registerError(dispatch, 'Password not valid! must be more than 7 characters...');
    } else if (password !== password2) {
        registerError(dispatch,'Passwords do not match!');
    } else {
        dispatch(register(email, password));
    }
};
