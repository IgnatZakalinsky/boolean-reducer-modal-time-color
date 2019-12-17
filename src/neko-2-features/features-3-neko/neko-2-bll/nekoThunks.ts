import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {INekoActions, nekoSetName} from "./bll-2-redux/nekoActions";
import {NekoAPI} from "../neko-3-dal/NekoAPI";
import {ISignInActions} from "../../features-1-authorization/authorization-1-sign-in/sign-in-2-bll/bll-2-redux/signInActions";
import {getCookie, setCookie} from "../../features-2-helpers/cookies";
import {signInSuccess} from "../../features-1-authorization/authorization-1-sign-in/sign-in-2-bll/bll-1-callbacks/signInBooleanCallbacks";
import {nekoLoading, nekoError, nekoSuccess} from "./bll-1-callbacks/nekoBooleanCallbacks";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getMe = (): ThunkAction<Return, IAppStore, ExtraArgument, INekoActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, INekoActions | ISignInActions>, getStore: IGetStore) => {

        nekoLoading(dispatch, true);
        const token = getCookie('token') || '';

        try {
            const data = await NekoAPI.getMe(token);
            if (data.error) {
                nekoError(dispatch, data.error);
                setCookie('token', '', -1000);

                console.log('Neko Get Me Error!', data.error, token);
            } else {
                setCookie('token', data.token, 60 * 60 * 48); // 2 days

                dispatch(nekoSetName(data.name));
                signInSuccess(dispatch, true);
                nekoSuccess(dispatch, true);

                console.log('Neko Get Me Success!', data.name)
            }
        } catch (e) {
            nekoError(dispatch, e.message);

            console.log('Neko Get Me Error!', e)
        }
    };
