import {useState} from "react";
import {signInClear} from "./signInBooleanCallbacks";
import {Dispatch} from "redux";

export const useSignInLocalState = (dispatch: Dispatch) => {
    const [email, setEmail] = useState('test@emali.nya');
    const [password, setPassword] = useState('test password nya');
    const [rememberMe, setRememberMe] = useState(false);

    const [redirect, setRedirect] = useState(false);

    const setEmailCallback = (email: string) => {
        setEmail(email);
        signInClear(dispatch);
    };
    const setPasswordCallback = (password: string) => {
        setPassword(password);
        signInClear(dispatch);
    };
    const setRememberMeCallback = (rememberMe: boolean) => {
        setRememberMe(rememberMe);
        signInClear(dispatch);
    };

    return {
        email,
        password,
        rememberMe,
        setEmailCallback,
        setPasswordCallback,
        setRememberMeCallback,

        redirect,
        setRedirect,
    }
};
