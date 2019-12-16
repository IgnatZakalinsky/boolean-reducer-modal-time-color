import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import Neko from "./Neko";
import {nekoSetName} from "../neko-2-bll/nekoActions";
import {Redirect} from "react-router";
import {getCookie, setCookie} from "../../features-2-helpers/cookies";
import {SIGN_IN_PATH} from "../../../neko-1-main/main-1-ui/Routes";
import {getMe} from "../neko-2-bll/nekoThunks";

const NekoContainer: React.FC = () => {
    // redux
    const {name, loading, error} = useSelector((store: IAppStore) => store.neko);
    const dispatch = useDispatch();

    // local state
    const [show, setShow] = useState(false);
    const [redirect, setRedirect] = useState(false);

    // useEffects
    useEffect(() => {
        dispatch(getMe());
    }, []);
    useEffect(() => {
        if (!getCookie('token')) setRedirect(true);
        else setShow(true);
    }, [name]);

    // callbacks
    const logoutCallback = () => {
        setCookie('token', '', -1000);
        dispatch(nekoSetName(''));
    };

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
            loading={loading}
            error={error}

            name={name}

            logoutCallback={logoutCallback}
        />
    );
};

export default NekoContainer;
