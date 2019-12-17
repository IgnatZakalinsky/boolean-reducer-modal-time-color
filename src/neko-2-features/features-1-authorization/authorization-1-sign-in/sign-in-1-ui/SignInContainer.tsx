import React from 'react';
import SignIn from "./SignIn";
import {Redirect} from "react-router-dom";
import {NEKO_PATH} from "../../../../neko-1-main/main-1-ui/Routes";
import {signInClear} from "../sign-in-2-bll/bll-1-callbacks/signInBooleanCallbacks";
import {useSignInContainerLogic} from "../sign-in-2-bll/bll-1-callbacks/useSignInContainerLogic";

const SignInContainer: React.FC = () => {
    const {
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
    } = useSignInContainerLogic();

    // redirect logic
    if (success.value) setTimeout(() => setRedirect(true), 500);
    if (redirect) {
        setTimeout(() => signInClear(dispatch), 500);
        return <Redirect to={NEKO_PATH}/>;
    }

    return (
        <SignIn
            loading={loading.value}
            error={error.data.message || ''}
            success={success.value}

            email={email}
            password={password}
            rememberMe={rememberMe}

            signInSetEmailCallback={setEmailCallback}
            signInSetPasswordCallback={setPasswordCallback}
            signInRememberMeCallback={setRememberMeCallback}

            signInCallback={signIn}
        />
    );
};

export default SignInContainer;
