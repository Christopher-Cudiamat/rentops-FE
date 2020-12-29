export interface DrawerPropTypes {
  showDrawer: boolean,
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>,
  isAuthenticated: boolean,
  setLogout: () => void
}