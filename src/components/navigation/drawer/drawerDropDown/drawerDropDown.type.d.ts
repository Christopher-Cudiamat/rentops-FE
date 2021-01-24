interface IDrawerDropDown {
  linkName?: string,
  pathName?: string,
  propertyType?: string
}

export interface IDrawerDropDownProps {
  arr?: IDrawerDropDown[],
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>,
  setPropertyInfo: (name:string, value: string) => void
}