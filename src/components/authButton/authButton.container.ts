import {connect} from 'react-redux';
import AuthButton from "./authButton.component";
import {AppState} from "../../configs/redux.config";
import { selectorsLoader } from '../../store/loader/loader.selector';


const mapStateToProps = (state:AppState) => {
  return{
    isLoading: selectorsLoader.getLoaderButton(state)
  }
}

const AuthButtonContainer = connect(mapStateToProps)(AuthButton);
export default AuthButtonContainer;