import {connect} from 'react-redux';
import PropertyInfoForm from "./propertyInfoForm.component";
import { Dispatch } from 'redux';
import { setAddPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setAddPropertyInfo:() => dispatch(setAddPropertyInfo()),
  }
}


const PropertyInfoFormContainer = connect(null,mapStateToDispatch)(PropertyInfoForm);
export default PropertyInfoFormContainer;