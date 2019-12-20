import React from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PATH, REGISTER_PATH} from "../../../../neko-1-main/main-1-ui/Routes";

interface ISignInProps {
    loading: boolean;
    error: string;
    success: boolean;

    email: string;
    password: string;
    rememberMe: boolean;

    signInSetEmailCallback: (email: string) => void;
    signInSetPasswordCallback: (password: string) => void;
    signInRememberMeCallback: (rememberMe: boolean) => void;

    signInCallback: () => void;
}

const SignIn: React.FC<ISignInProps> = (
    {
        loading,
        error,
        success,

        email,
        password,
        rememberMe,

        signInSetEmailCallback,
        signInSetPasswordCallback,
        signInRememberMeCallback,

        signInCallback
    }
) => {
    if (typeof error !== 'string') error = JSON.stringify(error);

    return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            sign-in

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : success
                        ? <div style={{color: 'lime'}}>Success!</div>
                        : <div><br/></div>
            }

            <input value={email} onChange={e => signInSetEmailCallback(e.currentTarget.value)}/>
            <input value={password} onChange={e => signInSetPasswordCallback(e.currentTarget.value)}/>

            <NavLink to={FORGOT_PATH}>Forgot password?</NavLink>

            <div>
                <input
                    type={'checkbox'}
                    checked={rememberMe}
                    onChange={e => signInRememberMeCallback(e.currentTarget.checked)}
                />
                Remember Me
            </div>
            <button onClick={signInCallback}>Sign In</button>

            <NavLink to={REGISTER_PATH}>Registration</NavLink>
        </div>
    );
};

export default SignIn;
