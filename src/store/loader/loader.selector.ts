import {AppState} from "../../configs/redux.config";

const getLoaderButton = (state: AppState) => {
    return state.loader.loaderButton
};
const getLoaderPage = (state: AppState) => {
    return state.loader.loaderPage
};

export const selectorsLoader = {
    getLoaderButton,
    getLoaderPage
};
