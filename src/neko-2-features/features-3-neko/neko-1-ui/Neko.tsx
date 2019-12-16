import React from 'react';

interface NekoProps {
    loading: boolean;
    error: string;

    name: string;

    logoutCallback: () => void;
}

const Neko: React.FC<NekoProps> = (
    {
        loading,
        error,

        name,

        logoutCallback,
    }
) => {

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
            neko

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : name
                        ? <div style={{color: 'lime'}}>{name}</div>
                        : <div><br/></div>
            }

            <button onClick={logoutCallback}>logout</button>
        </div>
    );
};

export default Neko;
