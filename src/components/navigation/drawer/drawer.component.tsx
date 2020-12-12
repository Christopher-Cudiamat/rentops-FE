import React from 'react';
import { drawerLinks } from './drawer.config';
import { DrawerContainer, DrawerList, DrawerUnderlay } from './drawer.style';
import { DrawerPropTypes } from './drawer.type';

const Drawer: React.FC<DrawerPropTypes> = ({showDrawer,setShowDrawer}) => {

  return (
    <>
      <DrawerContainer showDrawer={showDrawer}>
        <DrawerList onClick={() => setShowDrawer(false)}>BACK</DrawerList>
        {
          drawerLinks.map((el:any, index: number) => (
            <DrawerList 
              key={index} 
              linkColor={el.color}>
              {el.linkName}
            </DrawerList>
          ))
        }
      </DrawerContainer>
      <DrawerUnderlay showDrawer={showDrawer} onClick={() => setShowDrawer(false)}/>
    </>
  );
}

export default Drawer;
