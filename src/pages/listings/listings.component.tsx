import React, { useEffect } from 'react';
import CardProperty from '../../components/cardProperty/cardProperty.component';
import { getAddedProperties } from '../../services/propertyController';
import { IListingsProps } from './listings.type';

const Listings: React.FC<IListingsProps> = ({
  properties,
  setPropertyList
  }) => {

  
  useEffect(() => {
    getAddedProperties()
      .then(res => {
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
