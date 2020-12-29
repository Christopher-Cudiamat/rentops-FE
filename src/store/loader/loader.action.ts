import {
  IS_LOADING_BUTTON,
  IS_LOADING_PAGE,
  ILoaderButtonAction,
  ILoaderPageAction
} from "./loader.type";

export const setIsLoadingButton = (loaderState: boolean) : ILoaderButtonAction => {
  return {
    type: IS_LOADING_BUTTON,
    loader: loaderState,
  }
}

export const setIsLoadingPage = (loaderState: boolean) : ILoaderPageAction => {
  return {
    type: IS_LOADING_PAGE,
    loader: loaderState,
  }
}