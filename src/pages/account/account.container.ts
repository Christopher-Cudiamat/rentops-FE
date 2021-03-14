import { connect } from "react-redux";
import Account from "./account.component";
import { AppState } from "../../configs/redux.config";
import { selectorsUserAuth } from "../../store/userAuth/userAuth.selector";

const mapStateToProps = (state: AppState) => {
  return {
    profileData: selectorsUserAuth.getUserAuthState(state),
  };
};

const AccountContainer = connect(mapStateToProps)(Account);
export default AccountContainer;
