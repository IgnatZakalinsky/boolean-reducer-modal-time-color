import {useState} from "react";
import {Dispatch} from "redux";
import {forgotClear} from "./forgotBooleanCallbacks";

export const useForgotLocalState = (dispatch: Dispatch) => {
    const [email, setEmail] = useState('test@emali.nya');

    const [redirect, setRedirect] = useState(false);

    const setEmailCallback = (emailC: string) => {
        setEmail(emailC);
        forgotClear(dispatch);
    };

    return {
        email,
        setEmailCallback,

        redirect,
        setRedirect,
    }
};
