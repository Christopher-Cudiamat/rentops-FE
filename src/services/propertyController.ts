import { 
  instanceGet,
  instanceGetPrivate,
  instancePost
} from "../configs/axios.config";



export const addProperty = async (data: any) => {
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


export const getAllProperties = async (
  sort:string = "newest",
  propertyInfo: any
  ) => {
    
  let {
    location = "",
    propertyType = "",
    furnish = "",
    contractLength = "",
    developer = "",
    bed = "",
    bathroom = "",
    amenities 
  } = propertyInfo;

  let url = `/api/property/get-all-properties?sort=${sort}&location=${location}&propertyType=${propertyType}&furnish=${furnish}&contractLength=${contractLength}&developer=${developer}&bed=${bed}&bathroom=${bathroom}&amenities[]=${amenities}`;

  let newUrl = url.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"");
  const res = await instanceGet.get(newUrl);
  return res.data;
};






export const getLocation = async () => {
  let url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameterss';
  const res = await instanceGet.get(url);
  return res.data;
};