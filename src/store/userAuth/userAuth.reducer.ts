import { 
  IUserAuthAction,
  IUserAuthState,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS
} from "./userAuth.type";


const initialState: IUserAuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  email: "",
  // phoneNumber: 0,
  lastName: "",
  firstName: ""
} 

export const userAuthReducer = (state = initialState, action: IUserAuthAction) => {
  const {type,payload} = action;

  switch(type) {
    case REGISTER_SUCCESS:
      payload.token && localStorage.setItem('token',payload.token);
      return {
        ...payload,
      }
    case LOGIN_SUCCESS:
      payload.token && localStorage.setItem('token',payload.token);
      return {
        ...payload,
      }
    case LOGOUT: 
      localStorage.removeItem('token');
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}