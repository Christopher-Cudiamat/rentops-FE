import {AppState} from "../../configs/redux.config";

const getUserAuthState = (state: AppState) => {
    return state.userAuth
};

const getUserIsAuthenticated = (state: AppState) => {
    return state.userAuth.isAuthenticated
};

const getUserEmail = (state: AppState) => {
    return state.userAuth.email
};

const getUserFirstName = (state: AppState) => {
    return state.userAuth.firstName
};

const getUserLastName = (state: AppState) => {
    return state.userAuth.lastName
};

// const getUserPhoneNumber = (state: AppState) => {
//     return state.userAuth.phoneNumber
// };

const getUserToken = (state: AppState) => {
    return state.userAuth.token
};

const getUserLikes = (state: AppState) => {
    return state.userAuth.likes
};

export const selectorsUserAuth = {
    getUserAuthState,
    getUserIsAuthenticated,
    getUserEmail,
    getUserToken,
    // getUserPhoneNumber,
    getUserLastName,
    getUserFirstName,
    getUserLikes
};