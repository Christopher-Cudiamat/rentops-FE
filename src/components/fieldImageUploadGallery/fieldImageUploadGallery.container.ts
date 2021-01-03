import {connect} from 'react-redux';
import FieldImageUploadGallery from "./fieldImageUploadGalley.component";
import { Dispatch } from 'redux';
import {setPropertyImage } from '../../store/propertyMedia/propertyMedia.action';



const mapStateToDispatch = (dispatch: Dispatch) => {
  return { 
    setPropertyImage:(name:string, value:any[]) => dispatch(setPropertyImage(name,value)), 
  }
}

const FieldImageUploadGalleryContainer = connect(null,mapStateToDispatch)(FieldImageUploadGallery);
export default FieldImageUploadGalleryContainer;