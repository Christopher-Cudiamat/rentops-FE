import React from 'react';
import { 
  DrawerSubLinkText,
  DrawerSubList,
  DrawerSubListContainer
} from '../drawer.style';
import { IDrawerDropDownProps } from './drawerDropDown.type';


const DrawerDropDown: React.FC<IDrawerDropDownProps> = ({
  arr,
  setShowDrawer,
  setPropertyInfo
  }) => {

  const handleOnclick = (el: any) => {
    setPropertyInfo("propertyType", el.propertyType);
    setShowDrawer(false);
  }

  return (
    <DrawerSubListContainer>
      {
        arr!.map((el:any, index: number) => (
          < DrawerSubList 
            key={index} 
            onClick={() => handleOnclick(el)}
            >
            <DrawerSubLinkText
              to={el.path}>
              {el.linkName}
            </DrawerSubLinkText>
          </ DrawerSubList>
        ))
      }
    </DrawerSubListContainer>
  );
}

export default DrawerDropDown;
