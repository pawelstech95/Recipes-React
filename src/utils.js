import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://608432819b2bed0017040cbf.mockapi.io',
});

export const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);
