export const SET_PAGE = "SET_PAGE";

export interface IPageManagerState {
  [homePage: string]: boolean,
  rentPage: boolean,
  myAccountPage: boolean,
  addPropertyPage: boolean,
  aboutUsPage: boolean,
  contactUsPage: boolean,
  helpPage: boolean,
  signInPage: boolean,
  signOutPage: boolean
}

export interface ISetPageAction {
  type: typeof SET_PAGE,
  name: string,
  value: boolean
}


export type IPageManagerActions = ISetPageAction;
