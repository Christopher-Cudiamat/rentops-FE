import {connect} from 'react-redux';
import EmailVerificationForm from "./emailVerificationForm.component";
import * as userAuthAction from '../../../store/userAuth/userAuth.action';
import { Dispatch } from 'redux';
import { IUserAuthState } from '../../../store/userAuth/userAuth.type';


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setUserAuth:(data:IUserAuthState) => dispatch(userAuthAction.setRegistration(data)), 
  }
}

const EmailVerificationFormContainer = connect(null,mapStateToDispatch)(EmailVerificationForm);
export default EmailVerificationFormContainer;