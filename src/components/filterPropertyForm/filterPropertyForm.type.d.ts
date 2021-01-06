export interface IFilterPropertyForm {
  resetPropertyInfo: () => void,
  setFilter: React.Dispatch<React.SetStateAction<boolean>>,
  filter: boolean
}