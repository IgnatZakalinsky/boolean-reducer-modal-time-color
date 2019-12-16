export const FORGOT_LOADING = 'FORGOT/LOADING';
export const FORGOT_ERROR = 'FORGOT/ERROR';
export const FORGOT_SUCCESS = 'FORGOT/SUCCESS';

interface IForgotLoading {
    type: typeof FORGOT_LOADING;
    loading: boolean;
}
interface IForgotError {
    type: typeof FORGOT_ERROR;
    error: string;
}
interface IForgotSuccess {
    type: typeof FORGOT_SUCCESS;
    success: boolean;
}

export type IForgotActions = IForgotLoading | IForgotError | IForgotSuccess;

export const forgotLoading = (loading: boolean): IForgotLoading => ({
    type: FORGOT_LOADING,
    loading,
});
export const forgotError = (error: string): IForgotError => ({
    type: FORGOT_ERROR,
    error,
});
export const forgotSuccess = (success: boolean): IForgotSuccess => ({
    type: FORGOT_SUCCESS,
    success,
});

