import {AppState} from "../../configs/redux.config";

const getPropertyContact = (state: AppState) => {
  return state.propertyContact
};

export const selectorsPropertyContact = {
  getPropertyContact
};