import axios, {AxiosInstance} from 'axios';

export const jsonPlaceHolder = (): AxiosInstance => {
    return axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/",
    });
}