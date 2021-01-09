import styled  from "styled-components/macro";


export const Container = styled.div`
  background: ${({theme}) => theme.color.primaryLight};
  padding: 2rem 2rem 1rem 2rem;
  
  &>p {
    color: ${({theme}) => theme.color.white};
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  & > div {
    margin-bottom: 0rem;
  }

  & > div > input {
    background: ${({theme}) => theme.color.primaryLight};
  }

  & > div > label {
    color: ${({theme}) => theme.color.white};
    width: auto;
  }
`

export const ShowAllButton = styled.div`
  font-size: 1.4rem;
  color: ${({theme}) => theme.color.white};
  width: 10rem;
  margin:  1rem auto 0rem auto;
  text-align: center;
  padding: .5rem 0rem;
  background: ${({theme}) => theme.color.primary};
`