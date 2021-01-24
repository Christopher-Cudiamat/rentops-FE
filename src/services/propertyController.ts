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

export const favoriteProperty = async (propertyId: string, userId: string) => {
  let url = '/api/property/favorite-property';
  let body = {
    propertyId,
    userId
  };
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
    location,
    propertyType,
    furnish,
    contractLength,
    bed,
    bathroom,
    amenities, 
    priceRange = {min: "", max: ""},
    sizeRange = {min: "", max: ""}
  } = propertyInfo;

  let url = `/api/property/get-all-properties?sort=${sort}&location=${location}&propertyType[]=${propertyType}&furnish[]=${furnish}&contractLength[]=${contractLength}&bed=${bed}&bathroom=${bathroom}&amenities[]=${amenities}&priceMin=${priceRange.min}&priceMax=${priceRange.max}&sizeMin=${sizeRange.min}&sizeMax=${sizeRange.max}`;

  let newUrl = url.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"");
  const res = await instanceGet.get(newUrl);
  return res.data;
};


export const getProperty = async (propertyId: string) => {
  let url = `/api/property/get-property?propertyId=${propertyId}`;
  const res = await instanceGet.get(url);
  return res.data;
};





