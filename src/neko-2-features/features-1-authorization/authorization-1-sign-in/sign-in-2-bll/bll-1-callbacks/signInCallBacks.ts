import {emailValidator} from "../../../../features-2-helpers/emailValidator";
import {signInError} from "./signInBooleanCallbacks";
import {passwordValidator} from "../../../../features-2-helpers/passwordValidator";
import {signIn} from "../signInThunk";
import {ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../../neko-1-main/main-2-bll/store";
import {ISignInActions} from "../bll-2-redux/signInActions";
import {INekoActions} from "../../../../features-3-neko/neko-2-bll/nekoActions";
import {IBooleanActions} from "../../../../features-4-boolean-reducer/booleanActions";

type ExtraArgument = {};

export const signInCallback = (
    dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions | IBooleanActions>,
    email: string,
    password: string,
    rememberMe: boolean
) => () => {
    if (!emailValidator(email)) {
        signInError(dispatch, 'Email not valid!');
    } else if (!passwordValidator(password)) {
        signInError(dispatch, 'Password not valid! must be more than 7 characters...');
    } else {
        dispatch(signIn(email, password, rememberMe));
    }
};
