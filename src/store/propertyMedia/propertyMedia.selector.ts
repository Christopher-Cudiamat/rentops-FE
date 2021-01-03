import {AppState} from "../../configs/redux.config";

const getPropertyMedia = (state: AppState) => {
    return state.propertyMedia
};

export const selectorsPropertyMedia = {
  getPropertyMedia
};