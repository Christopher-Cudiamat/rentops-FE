import {connect} from 'react-redux';
import NavigationMobile from "./navigationMobile.component";
import { selectorsUserAuth } from '../../../store/userAuth/userAuth.selector';
import { AppState } from '../../../configs/redux.config';
import { Dispatch } from 'redux';
import { setLogout } from '../../../store/userAuth/userAuth.action';
import { setPage } from '../../../store/pageManager/pageManager.action';
import { selectorsPageManager } from '../../../store/pageManager/pageManager.selector';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';


const mapStateToProps = (state:AppState) => {
  return{
    isAuthenticated: selectorsUserAuth.getUserIsAuthenticated(state),
    activePage: selectorsPageManager.getActivePage(state)
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setPropertyInfo: (name:string, value: string) => dispatch(setPropertyInfo(name,value)),
    setLogout: () => dispatch(setLogout()), 
    setPage: (name:string, value:boolean) => dispatch(setPage(name,value))
  }
}


const NavigationMobileContainer = connect(mapStateToProps,mapStateToDispatch)(NavigationMobile);
export default NavigationMobileContainer;