import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import Register from './Register';
import {registerError, registerSuccess} from "../register-2-bll/registerActions";
import {register} from '../register-2-bll/registerThunks';
import {emailValidator} from "../../../features-2-helpers/emailValidator";
import {passwordValidator} from "../../../features-2-helpers/passwordValidator";
import {Redirect} from "react-router";
import {SIGN_IN_PATH} from "../../../../neko-1-main/main-1-ui/Routes";

const RegisterContainer: React.FC = () => {
    // redux
    const {loading, error, success} = useSelector((store: IAppStore) => store.register);
    const dispatch = useDispatch();

    // local state
    const [email, setEmail] = useState('test@emali.nya');
    const [password, setPassword] = useState('test password nya');
    const [password2, setPassword2] = useState('test password nya2');

    const [redirect, setRedirect] = useState(false);

    // callbacks
    const registerCallback = () => {
        if (!emailValidator(email)) {
            dispatch(registerError('Email not valid!'));
        } else if (!passwordValidator(password)) {
            dispatch(registerError('Password not valid! must be more than 7 characters...'));
        } else if (password !== password2) {
            dispatch(registerError('Passwords do not match!'));
        } else {
            dispatch(register(email, password));
        }
    };

    // redirect logic
    if (success) {
        setTimeout(() => setRedirect(true), 500)
    }
    if (redirect) {
        setTimeout(() => {
            dispatch(registerSuccess(false))
        }, 500);
        return <Redirect to={SIGN_IN_PATH}/>;
    }

    return (
        <Register
            loading={loading}
            error={error}
            success={success}

            email={email}
            password={password}
            password2={password2}

            registerSetEmailCallback={setEmail}
            registerSetPasswordCallback={setPassword}
            registerSetPasswordCallback2={setPassword2}

            registerCallback={registerCallback}
        />
    );
};

export default RegisterContainer;
