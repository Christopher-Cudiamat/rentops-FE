import {connect} from 'react-redux';
import SignInForm from "./signInForm.component";
import * as userAuthAction from '../../../store/userAuth/userAuth.action';
import { Dispatch } from 'redux';
import { IUserAuthState } from '../../../store/userAuth/userAuth.type';


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    login:(data:IUserAuthState) => dispatch(userAuthAction.setLogin(data)), 
  }
}

const SignInFormContainer = connect(null,mapStateToDispatch)(SignInForm);
export default SignInFormContainer;