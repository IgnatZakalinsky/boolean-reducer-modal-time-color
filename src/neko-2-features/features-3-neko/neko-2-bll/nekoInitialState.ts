export interface INekoState {
    loading: boolean;
    error: string;

    name: string;
}

export const nekoInitialState: INekoState = {
    loading: false,
    error: '',

    name: 'test name',
};
