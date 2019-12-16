import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import Forgot from './Forgot';
import {forgotError, forgotSuccess} from "../forgot-2-bll/forgotActions";
import {forgot} from "../forgot-2-bll/forgotThunks";
import {emailValidator} from "../../../features-2-helpers/emailValidator";
import {Redirect} from "react-router";
import {SIGN_IN_PATH} from "../../../../neko-1-main/main-1-ui/Routes";

const ForgotContainer: React.FC = () => {
    // redux
    const {loading, error, success} = useSelector((store: IAppStore) => store.forgot);
    const dispatch = useDispatch();

    // local state
    const [email, setEmail] = useState('test@emali.nya');

    const [redirect, setRedirect] = useState(false);

    // callbacks
    const forgotCallback = () => {
        if (emailValidator(email)) {
            dispatch(forgot(email));
        } else {
            dispatch(forgotError('Email not valid!'));
        }
    };

    // redirect logic
    if (success) {
        setTimeout(() => setRedirect(true), 500)
    }
    if (redirect) {
        setTimeout(() => {
            dispatch(forgotSuccess(false))
        }, 500);
        return <Redirect to={SIGN_IN_PATH}/>;
    }

    return (
        <Forgot
            loading={loading}
            error={error}
            success={success}

            email={email}

            forgotSetEmailCallback={setEmail}

            forgotCallback={forgotCallback}
        />
    );
};

export default ForgotContainer;
