import styled from "styled-components/macro";


export const Container = styled.div`
  padding: 3rem 1rem;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }
`

export const ResultText = styled.p`
  font-size: 1.6rem;
  font-weight: 400; 
  margin-bottom: 3rem;
  margin-top: 1rem;
  color: ${({theme}) => theme.color.gray};
`


