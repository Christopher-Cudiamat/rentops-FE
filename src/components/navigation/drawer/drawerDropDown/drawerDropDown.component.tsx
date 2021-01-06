import React from 'react';
import { 
  DrawerSubLinkText,
  DrawerSubList,
  DrawerSubListContainer
} from '../drawer.style';

interface IDrawerDropDown {
  linkName?: string,
  pathName?: string,
  propertyType?: string
}

interface IDrawerDropDownProps {
  arr?: IDrawerDropDown[],
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const DrawerDropDown: React.FC<IDrawerDropDownProps> = ({
  arr,
  setShowDrawer
  }) => {

  return (
    <DrawerSubListContainer>
      {
        arr!.map((el:any, index: number) => (
          < DrawerSubList 
            key={index} 
            onClick={() => setShowDrawer(false)}
            >
            <DrawerSubLinkText to={el.path}>
              {el.linkName}
            </DrawerSubLinkText>
          </ DrawerSubList>
        ))
      }
    </DrawerSubListContainer>
  );
}

export default DrawerDropDown;
