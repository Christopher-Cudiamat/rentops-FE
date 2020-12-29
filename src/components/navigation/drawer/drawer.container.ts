import {connect} from 'react-redux';
import Drawer from "./drawer.component";
import { selectorsUserAuth } from '../../../store/userAuth/userAuth.selector';
import { AppState } from '../../../configs/redux.config';
import { Dispatch } from 'redux';
import { setLogout } from '../../../store/userAuth/userAuth.action';


const mapStateToProps = (state:AppState) => {
  return{
    isAuthenticated: selectorsUserAuth.getUserIsAuthenticated(state)
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setLogout:() => dispatch(setLogout()), 
  }
}


const DrawerContainer = connect(mapStateToProps,mapStateToDispatch)(Drawer);
export default DrawerContainer;