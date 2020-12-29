import {AppState} from "../../configs/redux.config";

const getUserIsAuthenticated = (state: AppState) => {
    return state.userAuth.isAuthenticated
};

const getUserEmail = (state: AppState) => {
    return state.userAuth.isAuthenticated
};

const getUserToken = (state: AppState) => {
    return state.userAuth.isAuthenticated
};

export const selectorsUserAuth = {
    getUserIsAuthenticated,
    getUserEmail,
    getUserToken
};