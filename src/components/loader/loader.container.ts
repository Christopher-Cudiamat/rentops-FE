import {connect} from 'react-redux';
import Loader from "./loader.component";
import {AppState} from "../../configs/redux.config";
import { selectorsLoader } from '../../store/loader/loader.selector';


const mapStateToProps = (state:AppState) => {
  return{
    isLoading: selectorsLoader.getLoaderPage(state)
  }
}

const LoaderContainer = connect(mapStateToProps)(Loader);
export default LoaderContainer;