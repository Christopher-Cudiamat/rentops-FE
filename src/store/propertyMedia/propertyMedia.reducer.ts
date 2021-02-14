import { scaleImage } from "../../utils/imageManager";
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
      let newValue: any[] = []
      value.map((image: any) =>
        scaleImage(image.dataURL,0.5,"image/jpeg",0.7, function(newDataUrl:any) {
            newValue.push(newDataUrl);
          }
        )
      )
      return {
        ...state,
        [name] : newValue
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