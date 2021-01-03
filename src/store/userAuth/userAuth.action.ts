import { 
  IUserAuthAction,
  IUserAuthState,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS 
} from "./userAuth.type"

export const setRegistration = (data: IUserAuthState): IUserAuthAction => {
  return {
    type:  REGISTER_SUCCESS,
    payload: data,
  }
}

export const setLogin= (data:IUserAuthState): IUserAuthAction => {
  return {
    type:  LOGIN_SUCCESS,
    payload: data,
  }
}

export const setLogout = (): IUserAuthAction => {
  return {
    type:  LOGOUT,
    payload:   {
      token: null,
      isAuthenticated: false,
      email: "",
      firstName: "",
      lastName: ""
    }
  }
}