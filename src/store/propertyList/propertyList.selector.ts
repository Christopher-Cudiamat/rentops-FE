import {AppState} from "../../configs/redux.config";

const getPropertyList = (state: AppState) => {
    return state.propertyList
};

export const selectorsPropertyList = {
  getPropertyList
};