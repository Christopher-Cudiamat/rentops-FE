import {connect} from 'react-redux';
import PropertyUploadMediaForm from "./propertyUploadMediaForm.component";
import {AppState} from "../../../configs/redux.config";
import { selectorsPropertyInfo } from '../../../store/propertyInfo/propertyInfo.selector';
import { selectorsPropertyContact } from '../../../store/propertyContact/propertyContact.selector';
import { selectorsPropertyMedia } from '../../../store/propertyMedia/propertyMedia.selector';
import { Dispatch } from 'redux';
import { resetPropertyMedia } from '../../../store/propertyMedia/propertyMedia.action';
import { setPage } from '../../../store/pageManager/pageManager.action';





const mapStateToProps = (state:AppState) => {
  return{
    propertyInfo: selectorsPropertyInfo.getPropertyInfo(state),
    propertyContact: selectorsPropertyContact.getPropertyContact(state),
    propertyMedia: selectorsPropertyMedia.getPropertyMedia(state)
  }
}


const mapStateToDispatch = (dispatch: Dispatch) => {
  return { 
    resetPropertyMedia: () => dispatch(resetPropertyMedia()),
    setPage: (name:string, value:boolean) => dispatch(setPage(name,value))
  }
}

const PropertyUploadMediaFormContainer = connect(mapStateToProps,mapStateToDispatch)(PropertyUploadMediaForm);
export default PropertyUploadMediaFormContainer;