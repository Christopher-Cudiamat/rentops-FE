import {RESET_PROPERTY_MEDIA, SET_PROPERTY_IMAGES } from "./propertyMedia.type"


export const setPropertyImage = (name: string, value: any[]): any => {
  return {
    type: SET_PROPERTY_IMAGES,
    name,
    value
  }
}
export const resetPropertyMedia = (): any => {
  return {
    type: RESET_PROPERTY_MEDIA
  }
}
