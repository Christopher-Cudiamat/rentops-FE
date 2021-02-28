export const RESET_PROPERTY_MEDIA = "RESET_PROPERTY_MEDIA";
export const SET_PROPERTY_IMAGES = "SET_PROPERTY_IMAGES";


export interface IPropertyMedia {
  propertyPhoto: [] | string[],
  galleryPhotos: [] | string[]
}

export interface ISetPropertyImageAction {
  type: typeof SET_PROPERTY_IMAGES,
  name: string,
  value: string[]
}

export interface IResetPropertyMediaACtion {
  type: typeof RESET_PROPERTY_MEDIA,
}

export interface IActionDestructured {
  type: string,
  name?: any
  value?: any ,
}

export type IPropertyMediaAction = 
ISetPropertyImageAction |
IResetPropertyMediaACtion ;