import axios from 'axios';
import { setIsLoadingButton } from '../store/loader/loader.action';
import store from './store.config';
const token = localStorage.getItem('token');
console.log("TOKEEENNN ----",token);

export const instanceGet = axios.create({
  headers: {"Content-Type": "application/json"}
});

export const instanceGetPrivate = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Authorization": token,
  }
});

export const instancePost = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Authorization": token,
  }
});


instancePost.interceptors.request.use(async (config) => {
    store.dispatch(setIsLoadingButton(true));
    return config;
});

instancePost.interceptors.response.use(async (config) => {
    store.dispatch(setIsLoadingButton(false));
    return config;
});



