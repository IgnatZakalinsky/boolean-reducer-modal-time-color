import React from 'react';

interface IRegisterProps {
    loading: boolean;
    error: string;
    success: boolean;

    email: string;
    password: string;
    password2: string;

    registerSetEmailCallback: (email: string) => void;
    registerSetPasswordCallback: (password: string) => void;
    registerSetPasswordCallback2: (password: string) => void;

    registerCallback: () => void;
}

const Register: React.FC<IRegisterProps> = (
    {
        loading,
        error,
        success,

        email,
        password,
        password2,

        registerSetEmailCallback,
        registerSetPasswordCallback,
        registerSetPasswordCallback2,

        registerCallback
    }
) => {
    if (typeof error !== 'string') error = JSON.stringify(error);

    return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                flexFlow: 'column',
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            register

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : success
                        ? <div style={{color: 'lime'}}>Success!</div>
                        : <div><br/></div>
            }

            <input value={email} onChange={e => registerSetEmailCallback(e.currentTarget.value)}/>
            <input value={password} onChange={e => registerSetPasswordCallback(e.currentTarget.value)}/>
            <input value={password2} onChange={e => registerSetPasswordCallback2(e.currentTarget.value)}/>

            <button onClick={registerCallback}>Register</button>
        </div>
    );
};

export default Register;
