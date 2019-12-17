import {useBooleanSelector} from "../../../../features-4-boolean-reducer/useBooleanSelectors";
import {useDispatch} from "react-redux";
import {REGISTER_ACTION_NAMES} from "../bll-2-redux/registerActions";
import {useRegisterLocalState} from "./useRegisterLocalState";
import {registerCallback} from "./registerCallBacks";

export const useRegisterContainerLogic = () => {
    // redux
    const [loading, error, success] = useBooleanSelector(REGISTER_ACTION_NAMES);
    const dispatch = useDispatch();

    // local state
    const {
        email,
        password,
        password2,
        setEmailCallback,
        setPasswordCallback,
        setPassword2Callback,

        redirect,
        setRedirect,
    } = useRegisterLocalState(dispatch);

    // useEffects


    // callbacks
    const register = registerCallback(dispatch, email, password, password2);

    return {
        loading, error, success, dispatch,

        email,
        password,
        password2,
        setEmailCallback,
        setPasswordCallback,
        setPassword2Callback,

        redirect,
        setRedirect,

        register,
    }
};
