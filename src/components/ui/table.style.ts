import styled from "styled-components/macro";


interface ITableStyle {

}

export const Table = styled.table<ITableStyle>`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
  
  
`
export const Th = styled.th<ITableStyle>`
  border: 1px solid black;
`
export const Tr = styled.tr<ITableStyle>`
  border: 1px solid black;
`

export const Td = styled.td<ITableStyle>`
  border: 1px solid black;
  padding: 2rem 1rem;
`