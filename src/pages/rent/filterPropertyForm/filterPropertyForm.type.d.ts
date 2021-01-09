export interface IFilterPropertyForm {
  setFilterPropertyInfo: () => void,
  setFilter: React.Dispatch<React.SetStateAction<boolean>>,
  filter: boolean
}