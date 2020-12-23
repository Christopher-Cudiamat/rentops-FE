import { instancePost } from "../configs/axios.config";

interface ISignup {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  termsAndConditions: boolean
}

interface IEmailVerification {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  termsAndConditions: boolean
}

export const signup = async (data: ISignup) => {
  let url = '/api/user/sign-up';
  let body = data;
  const res = await instancePost.post(url,body);
  return res.data;
};

export const emailVerification = async (
  token: string, 
  insertedVerificationCode:  string
  ) => {

  let url = '/api/user/email-verification';
  let body = {token,insertedVerificationCode};
  const res = await instancePost.post(url,body);
  return res.data;
};
