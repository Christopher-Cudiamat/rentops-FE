import React from 'react';
import { useDispatch } from 'react-redux';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { LocationInput, LocationInputcontrol, LocationLabel } from './fieldLocation.style';

const FieldLocation = () => {

  const dispatch = useDispatch();

  const suggestionSelect=(result:string, lat:string, lng:string) =>{
    dispatch(setPropertyInfo("location",result));
    dispatch(setPropertyInfo("latitude",lat))
    dispatch(setPropertyInfo("longitude",lng))
  }

  return (
    <LocationInputcontrol>
      <LocationLabel>
        Location
      </LocationLabel>
      <LocationInput
        publicKey="pk.eyJ1IjoiY3Jpc3RvcHMxMyIsImEiOiJja2tsYXZqbDQwOTU0Mnhsb2g0OWszNmRvIn0.BZPjU2rnwZKo_hNBfhsjmg"
        // publicKey={process.env.REACT_APP_MAPBOX_TOKEN}
        onSuggestionSelect={suggestionSelect}
        country='ph'
        placeholder='Ex. Manila City,Makati City,Quezon City'
        resetSearch={false}
      />
    </LocationInputcontrol>
  );
}

export default FieldLocation;
