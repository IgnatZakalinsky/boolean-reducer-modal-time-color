import React from 'react';
import {Redirect, Route} from "react-router-dom";
import SignInPage from '../../neko-2-features/features-1-authorization/authorization-1-sign-in/sign-in-1-ui/SignInPage';
import RegisterPage from '../../neko-2-features/features-1-authorization/authorization-2-register/register-1-ui/RegisterPage';
import ForgotPage from '../../neko-2-features/features-1-authorization/authorization-3-forgot/forgot-1-ui/ForgotPage';
import NekoPage from "../../neko-2-features/features-3-neko/neko-1-ui/NekoPage";

// all project paths
export const SIGN_IN_PATH = '/sign-in';
export const REGISTER_PATH = '/register';
export const FORGOT_PATH = '/forgot';

export const NEKO_PATH = '/neko';

const Routes: React.FC = () => {
    return (
        <>
            <Route exact path={'/'} render={() => <Redirect to={SIGN_IN_PATH}/>}/>

            <Route path={SIGN_IN_PATH} render={() => <SignInPage/>}/>
            <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
            <Route path={FORGOT_PATH} render={() => <ForgotPage/>}/>

            <Route path={NEKO_PATH} render={() => <NekoPage/>}/>
        </>
    );
};

export default Routes;
