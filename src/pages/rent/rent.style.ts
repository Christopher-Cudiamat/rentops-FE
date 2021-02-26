import styled from "styled-components/macro";

export const FilterNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  background: ${({theme}) => theme.color.grayLightest};
  margin-top: 1rem;
  padding: .5rem 0rem;
  @media ${({theme}) => theme.media.laptop} { 
    padding: .5rem 4rem;
    justify-content: flex-start;
  }
`

export const Container = styled.div`
  padding: 1rem 1rem 3rem 1rem;
  min-height: 90vh;
  text-align: center;
`

export const ResultText = styled.p`
  font-size: 1.6rem;
  font-weight: 400; 
  margin-bottom: 3rem;
  color: ${({theme}) => theme.color.gray};
  @media ${({theme}) => theme.media.laptop} { 
    font-size: 2rem;
    margin-bottom: 4rem;
    margin-top: 2rem;
  }
`


