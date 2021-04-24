import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://crudcrud.com/api/680629abb2e348c3a1d78fb6994d1814',
});

export const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);
