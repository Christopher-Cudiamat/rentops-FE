import {connect} from 'react-redux';
import CarouselCities from "./carouselCities.component";
import { Dispatch } from 'redux';
import { setPropertyInfo } from '../../store/propertyInfo/propertyInfo.action';



const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setPropertyInfo: (name:string, value: string) => dispatch(setPropertyInfo(name,value)),
  }
}

const CarouselCitiesContainer = connect(null,mapStateToDispatch)(CarouselCities);
export default CarouselCitiesContainer;