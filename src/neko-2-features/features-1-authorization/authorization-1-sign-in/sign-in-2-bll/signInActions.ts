export const SIGN_IN_LOADING = 'SIGN_IN/LOADING';
export const SIGN_IN_ERROR = 'SIGN_IN/ERROR';
export const SIGN_IN_SUCCESS = 'SIGN_IN/SUCCESS';

interface ISignInLoading {
    type: typeof SIGN_IN_LOADING;
    loading: boolean;
}
interface ISignInError {
    type: typeof SIGN_IN_ERROR;
    error: string;
}
interface ISignInSuccess {
    type: typeof SIGN_IN_SUCCESS;
    success: boolean;
}

export type ISignInActions =
    ISignInLoading |
    ISignInError |
    ISignInSuccess;

export const signInLoading = (loading: boolean): ISignInLoading => ({
    type: SIGN_IN_LOADING,
    loading,
});
export const signInError = (error: string): ISignInError => ({
    type: SIGN_IN_ERROR,
    error,
});
export const signInSuccess = (success: boolean): ISignInSuccess => ({
    type: SIGN_IN_SUCCESS,
    success,
});

