import axios from 'axios';

const customAxios = axios.create({
  headers: {
    Accept: 'application/json',
  },
  baseURL: 'https://course-api.com',
});

export default customAxios;
