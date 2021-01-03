import {connect} from 'react-redux';
import PropertyUploadMediaForm from "./propertyUploadMediaForm.component";
import {AppState} from "../../../configs/redux.config";
import { selectorsPropertyInfo } from '../../../store/propertyInfo/propertyInfo.selector';
import { selectorsPropertyContact } from '../../../store/propertyContact/propertyContact.selector';
import { selectorsPropertyMedia } from '../../../store/propertyMedia/propertyMedia.selector';




const mapStateToProps = (state:AppState) => {
  return{
    propertyInfo: selectorsPropertyInfo.getPropertyInfo(state),
    propertyContact: selectorsPropertyContact.getPropertyContact(state),
    propertyMedia: selectorsPropertyMedia.getPropertyMedia(state)
  }
}

const PropertyUploadMediaFormContainer = connect(mapStateToProps)(PropertyUploadMediaForm);
export default PropertyUploadMediaFormContainer;