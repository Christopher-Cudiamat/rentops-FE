import { 
  IPageManagerActions,
  IPageManagerState,
  SET_PAGE 
} from "./pageManager.type";


const initialState: any = {
  homePage: true,
  rentPage: false,
  myAccountPage: false,
  addPropertyPage: false,
  aboutUsPage: false,
  contactUsPage: false,
  helpPage: false,
  signInPage: false,
  signOutPage: false,
} 

export const pageManagerReducer = (state = initialState, action: IPageManagerActions) => {
  
  const {type,name,value} = action;

  switch(type) {
    case SET_PAGE:
      Object.keys(state).map((el) => state[el] = false);
      return {
        ...state,
        [name] : value
      }
    default:
      return state;
  }
}