import axios from 'axios'

export default function $axios(config){
  const http = axios.create({
    
  })

  axios.interceptors.request.use(config => {

  return config;
  },error => {
  return Promise.reject(error);
  });

  axios.interceptors.response.use(response => {

  return response;
  },error => {
  return Promise.reject(error);
  });
  return http(config)
}