import axios from 'axios';

// const api = axios.create({
//     baseURL: process.env.API_BASE_URL,
// });

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

api.interceptors.request.use((config) => {
  // const token = useStorage('accessToken', '')

  // if (token.value) {
  //     config.headers = {
  //         ...config.headers,
  //         Authorization: `Bearer ${token.value}`,
  //     }
  // }

  // return config
  return config;
});

api.interceptors.response.use(undefined, function (error) {
  // error.handleToast = () => toastErrorHandle(error)
  // return Promise.reject(error)
});

export default api;
