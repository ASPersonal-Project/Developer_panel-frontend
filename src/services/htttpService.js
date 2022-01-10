import axios from 'axios';

const httpService = axios.create({
    baseURL: 'http://localhost:5000'
});

httpService.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJUeXBlIjoiZGV2ZWxvcGVyIiwiaWF0IjoxNjQxODEzNzgwLCJleHAiOjE2NDQ0MDU3ODB9.bgAH50cHnXjQ3l9PDRy49aOYnEtViA3AU6bJ4accVqg';
    return Promise.resolve(config)
});

httpService.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log('eeeeeeeeeeeee',error);
        return Promise.reject(error.response);
    }
)

export default httpService;