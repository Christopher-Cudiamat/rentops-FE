import {connect} from 'react-redux';
import PropertyContactForm from "./propertyContactForm.component";
import {AppState} from "../../../configs/redux.config";
import { selectorsUserAuth } from '../../../store/userAuth/userAuth.selector';
import { Dispatch } from 'redux';
import { setPropertyContact } from '../../../store/propertyContact/propertyContact.action';



const mapStateToProps = (state:AppState) => {
  return{
    UserAuth: selectorsUserAuth.getUserAuthState(state)
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setContactInfo:(data:any) => dispatch(setPropertyContact(data)), 
  }
}

const PropertyContactFormContainer = connect(mapStateToProps,mapStateToDispatch)(PropertyContactForm);
export default PropertyContactFormContainer;