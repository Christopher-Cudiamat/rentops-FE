import { 
  ISetPageAction,
  SET_PAGE 
} from "./pageManager.type"


export const setPage = (name: string, value: boolean): ISetPageAction => {
  return {
    type: SET_PAGE,
    name,
    value
  }
}