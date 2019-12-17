import React from 'react';
import Register from './Register';
import {Redirect} from "react-router";
import {SIGN_IN_PATH} from "../../../../neko-1-main/main-1-ui/Routes";
import {useRegisterContainerLogic} from '../register-2-bll/bll-1-callbacks/useRegisterContainerLogic';
import {registerClear} from "../register-2-bll/bll-1-callbacks/registerBooleanCallbacks";

const RegisterContainer: React.FC = () => {
    const {
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
    } = useRegisterContainerLogic();

    // redirect logic
    if (success.value) setTimeout(() => setRedirect(true), 500);
    if (redirect) {
        setTimeout(() => registerClear(dispatch), 500);
        return <Redirect to={SIGN_IN_PATH}/>;
    }

    return (
        <Register
            loading={loading.value}
            error={error.data.message || ''}
            success={success.value}

            email={email}
            password={password}
            password2={password2}

            registerSetEmailCallback={setEmailCallback}
            registerSetPasswordCallback={setPasswordCallback}
            registerSetPasswordCallback2={setPassword2Callback}

            registerCallback={register}
        />
    );
};

export default RegisterContainer;
