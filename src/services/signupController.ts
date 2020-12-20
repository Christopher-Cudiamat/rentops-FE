import { instancePost } from "../configs/axios.config";

export const signup = async (data:any) => {
  console.log("REG",data)
  const {firstName,lastName,email,password,termsAndConditions} = data;

  const config = {headers:{'Content-Type': 'application/json'}}
  let url = '/api/user/sign-up';
  console.log("URL",url)
  let body = {firstName,lastName,email,password,termsAndConditions};

  const res = await instancePost.post(url,body,config );
  console.log("EMAIL VERIFICATION RESPONE",res.data);
  return res.data;
};
