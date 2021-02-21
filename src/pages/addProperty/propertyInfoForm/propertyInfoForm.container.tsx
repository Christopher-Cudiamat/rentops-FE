import {connect} from 'react-redux';
import PropertyInfoForm from "./propertyInfoForm.component";
import { Dispatch } from 'redux';
import { setAddPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { AppState } from '../../../configs/redux.config';
import { selectorsPropertyInfo } from '../../../store/propertyInfo/propertyInfo.selector';

const mapStateToProps = (state:AppState) => {
  return{
    propertyInfo: selectorsPropertyInfo.getPropertyInfo(state),
  }
}


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setAddPropertyInfo:() => dispatch(setAddPropertyInfo()),
  }
}


const PropertyInfoFormContainer = connect(mapStateToProps,mapStateToDispatch)(PropertyInfoForm);
export default PropertyInfoFormContainer;