import {connect} from 'react-redux';
import { selectorsUserAuth } from '../../../store/userAuth/userAuth.selector';
import { AppState } from '../../../configs/redux.config';
import HomeAddProperty from './homeAddPropery.component';
import { setPage } from '../../../store/pageManager/pageManager.action';
import { Dispatch } from 'redux';



const mapStateToProps = (state:AppState) => {
  return{
    isAuthenticated: selectorsUserAuth.getUserIsAuthenticated(state),
  }
}
const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setPage: (name:string, value:boolean) => dispatch(setPage(name,value))
  }
}


const HomeAddPropertyContainer = connect(mapStateToProps,mapStateToDispatch)(HomeAddProperty);
export default HomeAddPropertyContainer;