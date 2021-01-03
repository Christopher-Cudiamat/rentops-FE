import {AppState} from "../../configs/redux.config";

const getPropertyInfo = (state: AppState) => {
    return state.propertyInfo
};

export const selectorsPropertyInfo = {
  getPropertyInfo
};