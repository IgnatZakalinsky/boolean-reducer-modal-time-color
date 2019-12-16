import React, {useEffect, useState} from 'react';
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {signInError, signInSuccess} from "../sign-in-2-bll/signInActions";
import {signIn} from "../sign-in-2-bll/signInThunks";
import {emailValidator} from '../../../features-2-helpers/emailValidator';
import {passwordValidator} from "../../../features-2-helpers/passwordValidator";
import {getMe} from "../../../features-3-neko/neko-2-bll/nekoThunks";
import {Redirect} from "react-router";
import {NEKO_PATH} from "../../../../neko-1-main/main-1-ui/Routes";

const SignInContainer: React.FC = () => {
    // redux
    const {loading, error, success} = useSelector((store: IAppStore) => store.signIn);
    const dispatch = useDispatch();

    // local state
    const [email, setEmail] = useState('test@emali.nya');
    const [password, setPassword] = useState('test password nya');
    const [rememberMe, setRememberMe] = useState(false);

    const [redirect, setRedirect] = useState(false);

    // useEffects
    useEffect(() => {
        dispatch(getMe());
    }, []);

    // callbacks
    const signInCallback = () => {
        if (!emailValidator(email)) {
            dispatch(signInError('Email not valid!'));
        } else if (!passwordValidator(password)) {
            dispatch(signInError('Password not valid! must be more than 7 characters...'));
        } else {
            dispatch(signIn(email, password, rememberMe));
        }
    };

    // redirect logic
    if (success) {
        setTimeout(() => {
            setRedirect(true);
        }, 500);
    }
    if (redirect) {
        setTimeout(() => {
            dispatch(signInSuccess(false))
        }, 500);
        return <Redirect to={NEKO_PATH}/>;
    }

    return (
        <SignIn
            loading={loading}
            error={error}
            success={success}

            email={email}
            password={password}
            rememberMe={rememberMe}

            signInSetEmailCallback={setEmail}
            signInSetPasswordCallback={setPassword}
            signInRememberMeCallback={setRememberMe}

            signInCallback={signInCallback}
        />
    );
};

export default SignInContainer;
