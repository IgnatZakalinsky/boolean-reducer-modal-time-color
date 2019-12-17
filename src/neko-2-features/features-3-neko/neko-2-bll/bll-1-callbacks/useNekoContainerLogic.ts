import {useDispatch, useSelector} from "react-redux";
import {useBooleanSelector} from "../../../features-4-boolean-reducer/useBooleanSelectors";
import {NEKO_ACTION_NAMES} from "../bll-2-redux/nekoActions";
import {useNekoLocalState} from "./useNekoLocalState";
import {logoutCallback} from "./nekoCallBacks";
import {useEffect} from "react";
import {getMe} from "../nekoThunks";
import {getCookie} from "../../../features-2-helpers/cookies";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";

export const useNekoContainerLogic = () => {
    // redux
    const [loading, error, success] = useBooleanSelector(NEKO_ACTION_NAMES);
    const {name} = useSelector((store: IAppStore) => store.neko);
    const dispatch = useDispatch();

    // local state
    const {
        show,
        setShow,

        redirect,
        setRedirect,
    } = useNekoLocalState(dispatch);

    // useEffects
    useEffect(() => {
        dispatch(getMe());
    }, []);
    useEffect(() => {
        if (!getCookie('token')) setRedirect(true);
        else setShow(true);
    }, [name]);

    // callbacks
    const logout = logoutCallback(dispatch);

    return {
        loading, error, success, dispatch,
        name,

        show,
        setShow,

        redirect,
        setRedirect,

        logout,
    }
};
