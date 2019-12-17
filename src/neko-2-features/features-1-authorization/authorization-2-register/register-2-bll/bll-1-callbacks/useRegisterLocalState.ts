import {useState} from "react";
import {Dispatch} from "redux";
import {registerClear} from "./registerBooleanCallbacks";

export const useRegisterLocalState = (dispatch: Dispatch) => {
    const [email, setEmail] = useState('test@emali.nya');
    const [password, setPassword] = useState('test password nya');
    const [password2, setPassword2] = useState('test password nya2');

    const [redirect, setRedirect] = useState(false);

    const setEmailCallback = (emailC: string) => {
        setEmail(emailC);
        registerClear(dispatch);
    };
    const setPasswordCallback = (passwordC: string) => {
        setPassword(passwordC);
        registerClear(dispatch);
    };
    const setPassword2Callback = (password2C: string) => {
        setPassword2(password2C);
        registerClear(dispatch);
    };

    return {
        email,
        password,
        password2,
        setEmailCallback,
        setPasswordCallback,
        setPassword2Callback,

        redirect,
        setRedirect,
    }
};
