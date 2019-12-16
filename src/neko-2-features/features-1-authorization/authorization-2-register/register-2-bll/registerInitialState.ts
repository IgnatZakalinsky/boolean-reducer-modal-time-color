export interface IRegisterState {
    loading: boolean;
    error: string;
    success: boolean;
}

export const registerInitialState: IRegisterState = {
    loading: false,
    error: '',
    success: false,
};
