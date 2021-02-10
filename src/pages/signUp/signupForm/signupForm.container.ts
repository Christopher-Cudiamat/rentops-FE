import {connect} from 'react-redux';
import SignupForm from "./signupForm.component";
import { Dispatch } from 'redux';
import { setPage } from '../../../store/pageManager/pageManager.action';


const mapStateToDispatch = (dispatch: Dispatch) => {
  return { 
    setPage: (name:string, value:boolean) => dispatch(setPage(name,value))
  }
}

const SignupFormContainer = connect(null,mapStateToDispatch)(SignupForm);
export default SignupFormContainer;