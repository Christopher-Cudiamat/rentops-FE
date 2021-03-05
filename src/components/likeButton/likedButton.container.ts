import {connect} from 'react-redux';
import LikeButton from "./likeButton.component";
import { selectorsUserAuth } from '../../store/userAuth/userAuth.selector';
import { AppState } from '../../configs/redux.config';

const mapStateToProps = (state:AppState) => {
  return{
    likes: selectorsUserAuth.getUserLikes(state)
  }
}

const LikeButtonContainer = connect(mapStateToProps)(LikeButton);
export default LikeButtonContainer;