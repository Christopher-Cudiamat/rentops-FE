export interface CarouselCitiesPropTypes {
  sliderArr: sliderList[],
  setPropertyInfo: (name:string, value: string) => void,
}

export interface sliderList {
  cityImage: string,
  cityName: string,
  cityAltText: string,
}

