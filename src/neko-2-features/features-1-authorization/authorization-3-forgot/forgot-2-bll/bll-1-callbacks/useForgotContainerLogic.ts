import {useBooleanSelector} from "../../../../features-4-boolean-reducer/useBooleanSelectors";
import {useDispatch} from "react-redux";
import {FORGOT_ACTION_NAMES} from "../bll-2-redux/forgotActions";
import {useForgotLocalState} from "./useForgotLocalState";
import {forgotCallback} from "./forgotCallBacks";

export const useForgotContainerLogic = () => {
    // redux
    const [loading, error, success] = useBooleanSelector(FORGOT_ACTION_NAMES);
    const dispatch = useDispatch();

    // local state
    const {
        email,
        setEmailCallback,

        redirect,
        setRedirect,
    } = useForgotLocalState(dispatch);

    // useEffects


    // callbacks
    const forgot = forgotCallback(dispatch, email);

    return {
        loading, error, success, dispatch,

        email,
        setEmailCallback,

        redirect,
        setRedirect,

        forgot,
    }
};
