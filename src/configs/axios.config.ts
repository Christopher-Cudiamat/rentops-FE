import axios from 'axios';
import { setIsLoadingButton } from '../store/loader/loader.action';
import store from './store.config';


export const instanceGet = axios.create({
  headers: {"Content-Type": "application/json"}
});

export const instancePost = axios.create({
  headers: {"Content-Type": "application/json"}
});


instancePost.interceptors.request.use(async (config) => {
    store.dispatch(setIsLoadingButton(true));
    return config;
});

instancePost.interceptors.response.use(async (config) => {
    store.dispatch(setIsLoadingButton(false));
    return config;
});



