import {
  IResetPropertyMediaACtion, 
  ISetPropertyImageAction, 
  RESET_PROPERTY_MEDIA, 
  SET_PROPERTY_IMAGES 
} from "./propertyMedia.type";


export const setPropertyImage = (
  name: string,
  value: string[]
): ISetPropertyImageAction=> {

  return {
    type: SET_PROPERTY_IMAGES,
    name,
    value
  }
  
}

export const resetPropertyMedia = (): IResetPropertyMediaACtion => {
  return {
    type: RESET_PROPERTY_MEDIA
  }
}
