import axios from 'axios';

const httpService = axios.create({
    baseURL: 'http://localhost:5000'
});

httpService.interceptors.request.use(config => {
    return Promise.resolve(config)
});

httpService.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error.response);
    }
)

export default httpService;