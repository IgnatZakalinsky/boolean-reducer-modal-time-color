import React from 'react';

interface IForgotProps {
    loading: boolean;
    error: string;
    success: boolean;

    email: string;

    forgotSetEmailCallback: (email: string) => void;

    forgotCallback: () => void;
}

const Forgot: React.FC<IForgotProps> = (
    {
        loading,
        error,
        success,

        email,

        forgotSetEmailCallback,

        forgotCallback
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
            forgot

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : success
                        ? <div style={{color: 'lime'}}>Success!</div>
                        : <div><br/></div>
            }

            <input value={email} onChange={e => forgotSetEmailCallback(e.currentTarget.value)}/>
            <button onClick={forgotCallback}>Send email</button>
        </div>
    );
};

export default Forgot;
