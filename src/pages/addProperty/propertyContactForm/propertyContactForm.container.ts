import {connect} from 'react-redux';
import PropertyContactForm from "./propertyContactForm.component";
import {AppState} from "../../../configs/redux.config";
import { selectorsUserAuth } from '../../../store/userAuth/userAuth.selector';
import { Dispatch } from 'redux';
import { setPropertyContact } from '../../../store/propertyContact/propertyContact.action';
import { IPropertyContact } from '../../../store/propertyContact/propertyContact.type';



const mapStateToProps = (state:AppState) => {
  return{
    UserAuth: selectorsUserAuth.getUserAuthState(state)
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setContactInfo:(data:IPropertyContact) => dispatch(setPropertyContact(data)), 
  }
}

const PropertyContactFormContainer = connect(mapStateToProps,mapStateToDispatch)(PropertyContactForm);
export default PropertyContactFormContainer;