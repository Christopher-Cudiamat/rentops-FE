export interface IPaginationProps {
  setSkip: React.Dispatch<React.SetStateAction<number>>,
  pageCount: number,
  ItemPerPage: number
}

export interface IDataPagination {
  selected: number
}