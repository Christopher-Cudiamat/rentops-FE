import React, { useEffect, useState } from 'react';
import CardProperty from '../../components/cardProperty/cardProperty.component';
import { getAddedProperties } from '../../services/propertyController';
import { IListingsProps } from './propertyList/listings.type';

const Listings: React.FC<IListingsProps> = ({
  properties,
  setPropertyList
  }) => {

  
  useEffect(() => {
    getAddedProperties()
      .then(res => {
        console.log("RESPONSE",res);
        setPropertyList(res);
      })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{padding: "5rem 0rem"}}>
      <CardProperty data={properties}/>
    </div>
  );
}

export default Listings;
