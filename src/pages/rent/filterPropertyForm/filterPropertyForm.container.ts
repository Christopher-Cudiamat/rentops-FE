import {connect} from 'react-redux';
import FilterPropertyForm from "./filterPropertyForm.component";
import { Dispatch } from 'redux';
import { setFilterPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';

const mapStateToDispatch = (dispatch: Dispatch) => {
  return { 
    setFilterPropertyInfo:() => dispatch(setFilterPropertyInfo()), 
  }
}

const FilterPropertyFormContainer = connect(null,mapStateToDispatch)(FilterPropertyForm);
export default FilterPropertyFormContainer;