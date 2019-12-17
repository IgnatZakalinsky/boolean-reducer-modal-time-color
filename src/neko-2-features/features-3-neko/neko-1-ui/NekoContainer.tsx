import React from 'react';
import Neko from "./Neko";
import {Redirect} from "react-router";
import {SIGN_IN_PATH} from "../../../neko-1-main/main-1-ui/Routes";
import {useNekoContainerLogic} from "../neko-2-bll/bll-1-callbacks/useNekoContainerLogic";

const NekoContainer: React.FC = () => {
    const {
        loading, error, success, dispatch,
        name,

        show,
        setShow,

        redirect,
        setRedirect,

        logout,
    } = useNekoContainerLogic();

    // redirect logic
    if (redirect) {
        return <Redirect to={SIGN_IN_PATH}/>;
    }
    if (!show) return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'orange',
            }}
        >
            Loading...
        </div>
    );

    return (
        <Neko
            loading={loading.value}
            error={error.data.message || ''}

            name={name}

            logoutCallback={logout}
        />
    );
};

export default NekoContainer;
