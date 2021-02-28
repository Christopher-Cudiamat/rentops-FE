import { scaleImage } from "../../utils/imageManager";
import {
  IActionDestructured,
  IPropertyMedia,
  IPropertyMediaAction,
  RESET_PROPERTY_MEDIA,
  SET_PROPERTY_IMAGES
} from "./propertyMedia.type";


const initialState: IPropertyMedia = {
  propertyPhoto: [] ,
  galleryPhotos: []
} 

export const propertyMediaReducer = (
  state = initialState,
  action: IPropertyMediaAction
) => {

  const {type,name,value}:IActionDestructured = action;

  switch(type) {
    case SET_PROPERTY_IMAGES:
      let newValue: string[] = []
      value.map((image: any) =>
        scaleImage(image.dataURL,0.5,"image/jpeg",0.7, function(newDataUrl:string) {
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