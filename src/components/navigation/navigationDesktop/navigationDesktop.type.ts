export interface INavigationDesktopProps {
  setPage: (name:string, value: boolean) => void,
  activePage: string,
  isAuthenticated: boolean,
  setLogout: () => void
}

export interface INavigationDesktop {
  linkName: string,
  path?: string,
  value: string,
  dropDownLinks?: IDropDownLink[]
}

export interface IDropDownLink {
  linkName: string,
  path: string,
  value: string,
  propertyType: string
}