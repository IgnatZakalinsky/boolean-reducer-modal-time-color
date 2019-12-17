import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {signInReducer} from "../../neko-2-features/features-1-authorization/authorization-1-sign-in/sign-in-2-bll/bll-2-redux/signInReducer";
import {registerReducer} from "../../neko-2-features/features-1-authorization/authorization-2-register/register-2-bll/registerReducer";
import {forgotReducer} from "../../neko-2-features/features-1-authorization/authorization-3-forgot/forgot-2-bll/forgotReducer";
import {nekoReducer} from "../../neko-2-features/features-3-neko/neko-2-bll/nekoReducer";
import {booleanReducer} from "../../neko-2-features/features-4-boolean-reducer/booleanReducer";

const reducers = combineReducers({
    signIn: signInReducer,
    register: registerReducer,
    forgot: forgotReducer,

    booleans: booleanReducer,

    neko: nekoReducer,


});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
