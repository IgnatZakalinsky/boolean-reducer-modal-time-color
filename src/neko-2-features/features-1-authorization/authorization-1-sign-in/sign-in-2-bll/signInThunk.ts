import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {ISignInActions} from "./bll-2-redux/signInActions";
import {SignInAPI} from "../sign-in-3-dal/SignInAPI";
import {passwordCoding} from "../../../features-2-helpers/passwordCoding";
import {INekoActions, nekoSetName} from "../../../features-3-neko/neko-2-bll/bll-2-redux/nekoActions";
import {setCookie} from "../../../features-2-helpers/cookies";
import {IBooleanActions} from "../../../features-4-boolean-reducer/booleanActions";
import {signInError, signInLoading, signInSuccess} from "./bll-1-callbacks/signInBooleanCallbacks";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signIn =
    (email: string, password: string, rememberMe: boolean)
        : ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
        async (
            dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions | IBooleanActions>,
            getStore: IGetStore
        ) => {
            signInLoading(dispatch, true);

            try {
                const data = await SignInAPI.signIn(email, passwordCoding(password), rememberMe);

                if (data.error) {
                    signInError(dispatch, data.error);

                } else {
                    dispatch(nekoSetName(data.name));

                    setCookie('token', data.token, 60 * 60 * 48); // 2 days
                    signInSuccess(dispatch, true);

                    console.log('Neko Sign-in Success!', data)
                }
            } catch (e) {
                signInError(dispatch, e.message);

                console.log('Neko Sign-in Error!', e)
            }
        };
