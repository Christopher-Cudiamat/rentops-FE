import {
  IS_LOADING_BUTTON,
  ILoaderParameter,
  IS_LOADING_PAGE, 
  ILoaderAction
} from './loader.type';


const initialState: ILoaderParameter = {
  loaderPage: false,
  loaderButton: false
};

export const loaderReducer = (
  state = initialState,
 action: ILoaderAction
): ILoaderParameter => {

  switch(action.type) {
    case IS_LOADING_BUTTON:
      return {...state, loaderButton: action.loader};
    case IS_LOADING_PAGE:
      return {...state, loaderPage: action.loader};
    default:
      return state;
  }  
  
}; 