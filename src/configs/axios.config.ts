import axios from 'axios';
import { 
  setIsLoadingButton,
  setIsLoadingPage 
} from '../store/loader/loader.action';
import store from './store.config';

const token = localStorage.getItem('token');


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

export const instancePostButton = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Authorization": token,
  }
});


instancePostButton.interceptors.request.use(
  async (config) => {
    store.dispatch(setIsLoadingButton(true));
    return config;
  }
);


instancePostButton.interceptors.response.use(
  async (config) => {
    store.dispatch(setIsLoadingButton(false));
    return config;
  },
  (error) => {
    store.dispatch(setIsLoadingButton(false));
    return Promise.reject(error);
  }
);


instancePost.interceptors.request.use(async (config) => {
  store.dispatch(setIsLoadingPage(true));
  return config;
});


instancePost.interceptors.response.use(
  async (config) => {
    store.dispatch(setIsLoadingPage(false));
    return config;
  },
  (error) => {
    store.dispatch(setIsLoadingPage(false));
    return Promise.reject(error);
  }
);


instanceGet.interceptors.request.use(async (config) => {
  store.dispatch(setIsLoadingPage(true));
  return config;
});


instanceGet.interceptors.response.use(
  async (config) => {
    store.dispatch(setIsLoadingPage(false));
    return config;
  },
  (error) => {
    store.dispatch(setIsLoadingPage(false));
    return Promise.reject(error);
  }
);



