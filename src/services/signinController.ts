import { instancePostButton } from "../configs/axios.config";

interface ISignin {
  email: string,
  password: string,
}

interface ISendOtp {
  firstName: string,
  lastName: string,
  email: string
}

export const signin = async (data: ISignin) => {
  let url = '/api/user/sign-in';
  let body = data;
  const res = await instancePostButton.post(url,body);
  return res.data;
};

export const sendOtp = async (data: ISendOtp) => {
  let url = '/api/user/send-otp';
  let body = data;
  const res = await instancePostButton.post(url,body);
  return res.data;
};

export const otpVerification = async (generatedOtp: string,userOtp: string) => {
  let url = '/api/user/verify-otp';
  let body = {
    generatedOtp: generatedOtp,
    userOtp: userOtp
  };
  const res = await instancePostButton.post(url,body);
  return res.data;
};

export const changePassword = async (email: string,newPassword: string) => {
  let url = '/api/user/change-password';
  let body = {
    email,
    newPassword
  };
  const res = await instancePostButton.post(url,body);
  return res.data;
};



