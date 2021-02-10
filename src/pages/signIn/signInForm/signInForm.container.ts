import {connect} from 'react-redux';
import SignInForm from "./signInForm.component";
import * as userAuthAction from '../../../store/userAuth/userAuth.action';
import { Dispatch } from 'redux';
import { IUserAuthState } from '../../../store/userAuth/userAuth.type';
import { setPage } from '../../../store/pageManager/pageManager.action';


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    login:(data:IUserAuthState) => dispatch(userAuthAction.setLogin(data)), 
    setPage: (name:string, value:boolean) => dispatch(setPage(name,value))
  }
}

const SignInFormContainer = connect(null,mapStateToDispatch)(SignInForm);
export default SignInFormContainer;