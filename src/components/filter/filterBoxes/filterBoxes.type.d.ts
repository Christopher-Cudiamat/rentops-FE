export interface IFilterBoxesProps {
  arr: IArr[],
  label: string,
  filterName: string
}

interface IArr {
  value: string,
  text: string
}