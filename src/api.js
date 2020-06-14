import axios from 'axios';

const api = axios.create({
    baseURL: `https://api.themoviedb.org/3/`
});

const upcomingParams = {
    api_key: `25c489c850818fb8c91a684fa9000603`,
    language: `en-US`
};

export const movieApi = {
    upcoming: async () => await api.get(`movie/upcoming`, {params: upcomingParams})
};
