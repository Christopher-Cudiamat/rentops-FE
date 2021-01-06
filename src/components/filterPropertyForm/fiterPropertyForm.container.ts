import {connect} from 'react-redux';
import FilterPropertyForm from "./filterPropertyForm.component";
import { Dispatch } from 'redux';
import { resetPropertyInfo } from '../../store/propertyInfo/propertyInfo.action';

const mapStateToDispatch = (dispatch: Dispatch) => {
  return { 
    resetPropertyInfo:() => dispatch(resetPropertyInfo()), 
  }
}

const FilterPropertyFormContainer = connect(null,mapStateToDispatch)(FilterPropertyForm);
export default FilterPropertyFormContainer;