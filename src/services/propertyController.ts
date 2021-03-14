import {
  instanceGet,
  instanceGetPrivate,
  instancePost,
} from "../configs/axios.config";
import { IPropertyContact } from "../store/propertyContact/propertyContact.type";
import { IPropertyInfoState } from "../store/propertyInfo/propertyInfo.type";
import { IPropertyMedia } from "../store/propertyMedia/propertyMedia.type";

interface IAddPropertiesData {
  propertyContact: IPropertyContact;
  propertyInfo: IPropertyInfoState;
  propertyMedia: IPropertyMedia;
}

export const addProperty = async (data: any) => {
  let url = "/api/property/add-property";
  let body = data;
  const res = await instancePost.post(url, body);
  return res.data;
};

export const favoriteProperty = async (propertyId: string, userId: string) => {
  console.log("propertyID", propertyId);
  console.log("userId", userId);
  let url = "/api/property/favorite-property";
  let body = {
    propertyId,
    userId,
  };
  const res = await instancePost.post(url, body);
  return res.data;
};

export const getAddedProperties = async () => {
  let url = "/api/property/get-added-properties";
  const res = await instanceGetPrivate.get(url);
  return res.data;
};

export const getFavoriteProperties = async (propertyId: any) => {
  console.log("CONTROLLER", propertyId);
  let keyArray = propertyId.map(function (item: any) {
    return item["propertyLikedId"];
  });
  console.log("KEYARRAY", keyArray);
  let url = `/api/property/get-favorite-properties?&propertyId[]=${keyArray}`;
  const res = await instanceGetPrivate.get(url);
  return res.data;
};

export const getAllProperties = async (
  sort: string = "newest",
  propertyInfo: IPropertyInfoState,
  skip: number = 0,
  limit: number = 6
) => {
  let {
    location,
    propertyType,
    furnish,
    contractLength,
    bed,
    bathroom,
    amenities,
    priceRange = { min: "", max: "" },
    sizeRange = { min: "", max: "" },
  } = propertyInfo;

  let url = `/api/property/get-all-properties?sort=${sort}&location=${location}&propertyType[]=${propertyType}&furnish[]=${furnish}&contractLength[]=${contractLength}&bed=${bed}&bathroom=${bathroom}&amenities[]=${amenities}&priceMin=${priceRange.min}&priceMax=${priceRange.max}&sizeMin=${sizeRange.min}&sizeMax=${sizeRange.max}&skip=${skip}&limit=${limit}`;

  let newUrl = url.replace(/[^=&]+=(&|$)/g, "").replace(/&$/, "");
  const res = await instanceGet.get(newUrl);
  return res.data;
};

export const getProperty = async (propertyId: string) => {
  let url = `/api/property/get-property?propertyId=${propertyId}`;
  const res = await instanceGet.get(url);
  return res.data;
};
