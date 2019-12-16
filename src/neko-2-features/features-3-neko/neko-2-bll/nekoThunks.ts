import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {INekoActions, nekoError, nekoLoading, nekoSetName} from "./nekoActions";
import {NekoAPI} from "../neko-3-dal/NekoAPI";
import {ISignInActions, signInSuccess} from "../../features-1-authorization/authorization-1-sign-in/sign-in-2-bll/signInActions";
import {getCookie, setCookie} from "../../features-2-helpers/cookies";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getMe = (): ThunkAction<Return, IAppStore, ExtraArgument, INekoActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, INekoActions | ISignInActions>, getStore: IGetStore) => {

        dispatch(nekoLoading(true));
        const token = getCookie('token') || '';

        try {
            const data = await NekoAPI.getMe(token);
            if (data.error) {
                dispatch(nekoError(data.error));
                setCookie('token', '', -1000);

                console.log('Neko Get Me Error!', data.error, token);
            } else {
                setCookie('token', data.token, 60 * 60 * 48); // 2 days
                dispatch(nekoSetName(data.name));
                dispatch(signInSuccess(true));

                console.log('Neko Get Me Success!', data.name)
            }
        } catch (e) {
            dispatch(nekoError(e.message));

            console.log('Neko Get Me Error!', e)
        }
    };
