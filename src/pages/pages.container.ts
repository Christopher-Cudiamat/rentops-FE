import {connect} from 'react-redux';
import Pages from "./pages.component";
import { selectorsUserAuth } from '../store/userAuth/userAuth.selector';
import { AppState } from '../configs/redux.config';
import { selectorsPageManager } from '../store/pageManager/pageManager.selector';



const mapStateToProps = (state:AppState) => {
  return{
    isAuthenticated: selectorsUserAuth.getUserIsAuthenticated(state),
    activePage: selectorsPageManager.getActivePage(state)
  }
}



const PagesContainer = connect(mapStateToProps)(Pages);
export default PagesContainer;