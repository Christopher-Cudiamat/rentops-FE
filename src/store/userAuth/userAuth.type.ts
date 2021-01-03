export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export interface IUserAuthState {
  token: string | null,
  isAuthenticated: boolean,
  email:string,
  // phoneNumber: number,
  firstName: string,
  lastName: string
}

export interface ISetRegistration {
  type: typeof REGISTER_SUCCESS,
  payload: IUserAuthState,
}

export interface ISetLogin {
  type: typeof LOGIN_SUCCESS,
  payload: IUserAuthState,
}

export interface ISetLogout {
  type: typeof LOGOUT,
  payload: IUserAuthState,
}

export type IUserAuthAction = 
  ISetRegistration | 
  ISetLogin |
  ISetLogout 
;