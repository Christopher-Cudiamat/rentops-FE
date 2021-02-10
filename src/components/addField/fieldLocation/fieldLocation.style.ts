import styled from "styled-components/macro";
// @ts-ignore
import MapboxAutocomplete from 'react-mapbox-autocomplete';
import { InputControl, InputLabel } from "../../ui/input.style";

export const LocationInputcontrol = styled(InputControl)`

  & div .react-mapbox-ac-input{
    width: 100%;
    height: 4.8rem;
    font-size: 1.6rem;
    padding: 0rem 1rem;
    border-radius: .5rem;
    text-align: left;
    border: 1px solid ${({theme}) => theme.color.gray};
    &::placeholder { 
      color: ${({theme}) => theme.color.grayLight};
    }
  }
    
  & div .react-mapbox-ac-menu {
    width: 100%;
    position: absolute;
    z-index: 9999;
    background-color: #fff;
    border: 1px solid #ccc;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: -1.3rem;
    margin-bottom: .8rem;
  }
  
  
  & div .react-mapbox-ac-suggestion {
    font-size: 18px;
    margin-bottom: .5rem;
    cursor: pointer;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    &:nth-child(2),
    &:nth-child(3) {
      margin-bottom: .5rem;
    }
  }
  
  & div .react-mapbox-ac-suggestion:hover {
    background-color: #58a;
  }
`;

export const LocationInput = styled(MapboxAutocomplete)`
 
`
export const LocationLabel = styled(InputLabel)`

`
