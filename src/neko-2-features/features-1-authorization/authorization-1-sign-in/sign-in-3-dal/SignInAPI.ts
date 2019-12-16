import axios from 'axios';
import {baseURL} from "../../../../base-url";

const instance = axios.create({
    baseURL
});

export interface ISignInData {
    name: string;
    token: string;

    error: string;
}

export const SignInAPI = {
    signIn: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<ISignInData>('/auth/login', {email, password, rememberMe});
        return response.data;
    },

};
