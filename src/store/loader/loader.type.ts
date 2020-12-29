export const IS_LOADING_BUTTON = "IS_LOADING_BUTTON";
export const IS_LOADING_PAGE = "IS_LOADING_PAGE";

export interface ILoaderParameter {
  loaderPage: boolean,
  loaderButton: boolean
}

export interface ILoaderButtonAction {
  type: typeof IS_LOADING_BUTTON,
  loader: boolean,
}

export interface ILoaderPageAction {
  type: typeof IS_LOADING_PAGE,
  loader: boolean,
}

export type ILoaderAction = ILoaderPageAction | ILoaderButtonAction;

