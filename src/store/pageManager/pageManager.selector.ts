import {AppState} from "../../configs/redux.config";

const getPageManager = (state: AppState) => {
    return state.pageManager;
};
const getActivePage = (state: AppState) => {
  let activePage = Object.keys(state.pageManager).filter((key: string) => {
    return state.pageManager[key] === true;
  })
  return activePage[0];
};

export const selectorsPageManager = {
  getPageManager,
  getActivePage 
};