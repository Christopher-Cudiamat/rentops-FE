import { instanceGet, instanceGetPrivate, instancePost } from "../configs/axios.config";



export const addProperty = async (data: any) => {
  console.log("DATA",data)
  let url = '/api/property/add-property';
  let body = data;
  const res = await instancePost.post(url,body);
  return res.data;
};

export const getAddedProperties = async () => {
  let url = '/api/property/get-added-properties';
  const res = await instanceGetPrivate.get(url);
  return res.data;
};

export const getLocation = async () => {
  let url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameterss';
  const res = await instanceGet.get(url);
  return res.data;
};