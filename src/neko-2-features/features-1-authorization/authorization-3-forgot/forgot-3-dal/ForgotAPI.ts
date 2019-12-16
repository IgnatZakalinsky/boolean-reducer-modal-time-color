import axios from 'axios';
import {baseURL} from "../../../../base-url";

const instance = axios.create({
    baseURL
});

export interface IForgotData {
    success: boolean;

    error: string;
}

export const ForgotAPI = {
    forgot: async (email: string) => {
        const response = await instance.post<IForgotData>('/auth/forgot', {email});
        return response.data;
    },

};
