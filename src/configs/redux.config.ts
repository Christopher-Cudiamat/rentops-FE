import {combineReducers} from "redux";
import {createBrowserHistory} from "history";
import { loaderReducer } from "../store/loader/loader.reducer";
import { userAuthReducer } from "../store/userAuth/userAuth.reducer";
import { propertyInfoReducer } from "../store/propertyInfo/propertyInfo.reducer";
import { propertyContactReducer } from "../store/propertyContact/propertyContact.reducer";
import { propertyMediaReducer } from "../store/propertyMedia/propertyMedia.reducer";
import { propertyListReducer } from "../store/propertyList/propertyList.reducer";


export const history = createBrowserHistory();

export const appReducer = combineReducers({
  "loader":loaderReducer,
  "userAuth": userAuthReducer,
  "propertyInfo": propertyInfoReducer,
  "propertyContact": propertyContactReducer,
  "propertyMedia": propertyMediaReducer,
  "propertyList": propertyListReducer,
});


export const rootReducer = (state:any, action: any) => {
  if(action.type === 'APP_DATA_RESET'){
    state = undefined
  }
  return appReducer(state,action)
}

export type AppState = ReturnType<typeof rootReducer>