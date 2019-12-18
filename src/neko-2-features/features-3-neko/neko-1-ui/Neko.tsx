import React from 'react';
import {NavLink} from "react-router-dom";
import {TEST_MODALS_PATH} from "../../../neko-1-main/main-1-ui/Routes";

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

            <NavLink to={TEST_MODALS_PATH}>Modals</NavLink>
        </div>
    );
};

export default Neko;
