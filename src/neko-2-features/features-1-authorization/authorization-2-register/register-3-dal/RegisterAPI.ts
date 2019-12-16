import axios from 'axios';
import {baseURL} from "../../../../base-url";

const instance = axios.create({
    baseURL
});

export interface IRegisterData {
    success: boolean;

    error: string;
}

export const RegisterAPI = {
    register: async (email: string, password: string) => {
        const response = await instance.post<IRegisterData>('/auth/register', {email, password});
        return response.data;
    },

};
