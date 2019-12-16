export const REGISTER_LOADING = 'REGISTER/LOADING';
export const REGISTER_ERROR = 'REGISTER/ERROR';
export const REGISTER_SUCCESS = 'REGISTER/SUCCESS';

interface IRegisterLoading {
    type: typeof REGISTER_LOADING;
    loading: boolean;
}
interface IRegisterError {
    type: typeof REGISTER_ERROR;
    error: string;
}
interface IRegisterSuccess {
    type: typeof REGISTER_SUCCESS;
    success: boolean;
}

export type IRegisterActions =
    IRegisterLoading |
    IRegisterError |
    IRegisterSuccess;

export const registerLoading = (loading: boolean): IRegisterLoading => ({
    type: REGISTER_LOADING,
    loading,
});
export const registerError = (error: string): IRegisterError => ({
    type: REGISTER_ERROR,
    error,
});
export const registerSuccess = (success: boolean): IRegisterSuccess => ({
    type: REGISTER_SUCCESS,
    success,
});
