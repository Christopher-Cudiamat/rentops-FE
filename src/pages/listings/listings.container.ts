import {connect} from 'react-redux';
import Listings from "./listings.component";
import {AppState} from "../../configs/redux.config";
import { Dispatch } from 'redux';
import { selectorsPropertyList } from '../../store/propertyList/propertyList.selector';
import { setPropertyList } from '../../store/propertyList/propertyList.action';
import { IPropertyList } from '../../store/propertyList/propertyList.type';


const mapStateToProps = (state:AppState) => {
  return{
    properties: selectorsPropertyList.getPropertyList(state),
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setPropertyList:(
      dataLength: number,
      properties: IPropertyList[]
    ) => dispatch(setPropertyList(dataLength, properties)), 
  }
}

const ListingsContainer = connect(mapStateToProps,mapStateToDispatch)(Listings);
export default ListingsContainer;