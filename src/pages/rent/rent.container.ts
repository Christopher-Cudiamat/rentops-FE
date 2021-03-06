import {connect} from 'react-redux';
import Rent from "./rent.component";
import {AppState} from "../../configs/redux.config";
import { Dispatch } from 'redux';
import { selectorsPropertyList } from '../../store/propertyList/propertyList.selector';
import { setPropertyList } from '../../store/propertyList/propertyList.action';
import { selectorsPropertyInfo } from '../../store/propertyInfo/propertyInfo.selector';
import { resetPropertyInfo } from '../../store/propertyInfo/propertyInfo.action';
import { IPropertyList } from "../../store/propertyList/propertyList.type";


const mapStateToProps = (state:AppState) => {
  return{
    data: selectorsPropertyList.getPropertyList(state),
    propertyInfo: selectorsPropertyInfo.getPropertyInfo(state)
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setPropertyList:(
      dataLength: number,
      properties: IPropertyList[]
    ) => dispatch(setPropertyList(dataLength, properties)), 
    resetPropertyInfo:() => dispatch(resetPropertyInfo()), 
  }
}

const RentContainer = connect(mapStateToProps,mapStateToDispatch)(Rent);
export default RentContainer;