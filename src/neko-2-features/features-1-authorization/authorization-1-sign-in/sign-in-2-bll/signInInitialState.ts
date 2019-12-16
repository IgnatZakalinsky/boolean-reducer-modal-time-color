export interface ISignInState {
    loading: boolean;
    error: string;
    success: boolean;
}

export const signInInitialState: ISignInState = {
    loading: false,
    error: '',
    success: false,
};
