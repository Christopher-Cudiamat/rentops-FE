import axios from 'axios';


export const instanceGet = axios.create({
  headers: {"Content-Type": "application/json"}
});

export const instancePost = axios.create({
  headers: {"Content-Type": "application/json"}
});

export const instanceDelete = axios.create({
    
});

export const instancePostForRedirect = axios.create({
   
});


//to be use later 

// instanceGet.interceptors.request.use(async (config) => {
//     store.dispatch(setIsLoading({isLoading: true}));
//     return config;
// });

// instanceDelete.interceptors.request.use(async (config) => {
//     store.dispatch(setIsLoading({isLoading: false}));
//     return config;
// });


// instancePost.interceptors.request.use(async (config) => {
//     store.dispatch(setIsLoading({isLoading: true}));
//     return config;
// });

// instancePost.interceptors.response.use(async (config) => {
//     store.dispatch(setIsLoading({isLoading: false}));
//     return config;
// });


// instanceGet.interceptors.response.use(async (config) => {
//     store.dispatch(setIsLoading({isLoading: false}));
//     return config;
// });

// instanceDelete.interceptors.response.use(async (config) => {
//     store.dispatch(setIsLoading({isLoading: false}));
//     return config;
// });

// instancePost.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     //catches if the session ended!
//     if ( error.response.status === 500) {
//         console.log("SERVER_ERROR");

//     }
//     return Promise.reject(error);
// });

// instanceGet.interceptors.response.use(undefined, err => {
//     store.dispatch(setIsLoading({isLoading: false}));
//     return Promise.reject(err);
// });

// instancePost.interceptors.response.use(undefined, err => {
//     store.dispatch(setIsLoading({isLoading: false}));
//     return Promise.reject(err);
// });