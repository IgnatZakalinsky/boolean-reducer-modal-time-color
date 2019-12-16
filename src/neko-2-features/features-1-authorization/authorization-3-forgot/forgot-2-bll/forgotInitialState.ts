export interface IForgotState {
    loading: boolean;
    error: string;
    success: boolean;
}

export const forgotInitialState: IForgotState = {
    loading: false,
    error: '',
    success: false,
};
