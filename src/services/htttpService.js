import axios from 'axios';

const httpService = axios.create({
    baseURL: 'http://localhost:5000'
});

httpService.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJUeXBlIjoiZGV2ZWxvcGVyIiwiaWF0IjoxNjQxOTgyMzQ1LCJleHAiOjE2NDQ1NzQzNDV9.xkwtBeO-bxxLux_Se7ci6e9Lw1_y0lI8K7u0cEObTZ8';
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