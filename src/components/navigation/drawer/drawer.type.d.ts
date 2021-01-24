export interface DrawerPropTypes {
  showDrawer: boolean,
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>,
  isAuthenticated: boolean,
  setLogout: () => void,
  setPage: (name:string, value: boolean) => void,
  activePage: string,
  setPropertyInfo: (name:string, value: string) => void
}