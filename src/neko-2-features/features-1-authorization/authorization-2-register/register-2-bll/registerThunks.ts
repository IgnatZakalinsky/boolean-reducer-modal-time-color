import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {IRegisterActions, registerError, registerLoading, registerSuccess} from "./registerActions";
import {RegisterAPI} from "../register-3-dal/RegisterAPI";
import {passwordCoding} from "../../../features-2-helpers/passwordCoding";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const register =
    (email: string, password: string): ThunkAction<Return, IAppStore, ExtraArgument, IRegisterActions> =>
        async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IRegisterActions>, getStore: IGetStore) => {

            dispatch(registerLoading(true));

            try {
                const data = await RegisterAPI.register(email, passwordCoding(password));

                if (data.error) {
                    dispatch(registerError(data.error));

                } else {
                    dispatch(registerSuccess(true));

                    console.log('Neko Register Success!', data)
                }
            } catch (e) {
                dispatch(registerError(e.message));

                console.log('Neko Register Error!', e)
            }
        };
