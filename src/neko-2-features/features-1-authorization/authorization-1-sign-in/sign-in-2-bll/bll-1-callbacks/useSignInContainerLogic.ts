import {useBooleanSelector} from "../../../../features-4-boolean-reducer/useBooleanSelectors";
import {SIGN_IN_ACTION_NAMES} from "../bll-2-redux/signInActions";
import {useDispatch} from "react-redux";
import {useSignInLocalState} from "./useSignInLocalState";
import {useEffect} from "react";
import {getMe} from "../../../../features-3-neko/neko-2-bll/nekoThunks";
import {signInCallback} from "./signInCallBacks";

export const useSignInContainerLogic = () => {
    // redux
    const [loading, error, success] = useBooleanSelector(SIGN_IN_ACTION_NAMES);
    const dispatch = useDispatch();

    // local state
    const {
        email,
        password,
        rememberMe,
        setEmailCallback,
        setPasswordCallback,
        setRememberMeCallback,

        redirect,
        setRedirect,
    } = useSignInLocalState(dispatch);

    // useEffects
    useEffect(() => {
        dispatch(getMe());
    }, []);

    // callbacks
    const signIn = signInCallback(dispatch, email, password, rememberMe);

    return {
        loading, error, success, dispatch,

        email,
        password,
        rememberMe,
        setEmailCallback,
        setPasswordCallback,
        setRememberMeCallback,

        redirect,
        setRedirect,

        signIn,
    }
};
