import {connect} from 'react-redux';
import NavigationDesktop from "./navigationDesktop.component";
import { AppState } from '../../../configs/redux.config';
import { Dispatch } from 'redux';
import { setPage } from '../../../store/pageManager/pageManager.action';
import { selectorsPageManager } from '../../../store/pageManager/pageManager.selector';
import { selectorsUserAuth } from '../../../store/userAuth/userAuth.selector';
import { setLogout } from '../../../store/userAuth/userAuth.action';



const mapStateToProps = (state:AppState) => {
  return{
    activePage: selectorsPageManager.getActivePage(state),
    isAuthenticated: selectorsUserAuth.getUserIsAuthenticated(state),
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setPage: (name:string, value:boolean) => dispatch(setPage(name,value)),
    setLogout: () => dispatch(setLogout()),
  }
}


const NavigationDesktopContainer = connect(mapStateToProps,mapStateToDispatch)(NavigationDesktop);
export default NavigationDesktopContainer;