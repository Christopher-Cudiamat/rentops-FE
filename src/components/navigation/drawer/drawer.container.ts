import {connect} from 'react-redux';
import Drawer from "./drawer.component";
import { selectorsUserAuth } from '../../../store/userAuth/userAuth.selector';
import { AppState } from '../../../configs/redux.config';
import { Dispatch } from 'redux';
import { setLogout } from '../../../store/userAuth/userAuth.action';
import { setPage } from '../../../store/pageManager/pageManager.action';
import { selectorsPageManager } from '../../../store/pageManager/pageManager.selector';


const mapStateToProps = (state:AppState) => {
  return{
    isAuthenticated: selectorsUserAuth.getUserIsAuthenticated(state),
    activePage: selectorsPageManager.getActivePage(state)
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setLogout: () => dispatch(setLogout()), 
    setPage: (name:string, value:boolean) => dispatch(setPage(name,value))
  }
}


const DrawerContainer = connect(mapStateToProps,mapStateToDispatch)(Drawer);
export default DrawerContainer;