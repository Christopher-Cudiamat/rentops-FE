import {connect} from 'react-redux';
import Navigation from "./navigation.component";
import { Dispatch } from 'redux';
import { setPage } from '../../store/pageManager/pageManager.action';

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setPage: (name:string, value:boolean) => dispatch(setPage(name,value))
  }
}


const NavigationContainer = connect(null,mapStateToDispatch)(Navigation);
export default NavigationContainer;