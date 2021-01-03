import {
  RESET_PROPERTY_MEDIA,
  SET_PROPERTY_IMAGES
} from "./propertyMedia.type";


const initialState: any = {
  propertyPhoto: [],
  galleryPhotos: []
} 

export const propertyMediaReducer = (state = initialState, action: any) => {
  const {type,name,value} = action;

  switch(type) {
    case SET_PROPERTY_IMAGES:
      return {
        ...state,
        [name] : value
      }
    case RESET_PROPERTY_MEDIA:
      return {
        propertyPhoto: "",
        galleryPhotos: []
      }
    default:
      return state;
  }
}