export interface INavMobile {
  linkName: string;
  path?: string;
  icon: string;
  altText: string;
  value: string;
  dropDownLinks?: IDropDownLink[];
}

interface IDropDownLink {
  linkName: string;
  path: string;
  propertyType: string;
}


export interface DrawerPropTypes {
  showDrawer: boolean,
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>,
  isAuthenticated: boolean,
  setLogout: () => void,
  setPage: (name:string, value: boolean) => void,
  activePage: string,
  setPropertyInfo: (name:string, value: string) => void
}