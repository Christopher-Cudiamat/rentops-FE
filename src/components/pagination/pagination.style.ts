import styled from "styled-components/macro";



interface IPaginationStyle {
  isVisible: boolean
}

export const PaginationContainer = styled.div<IPaginationStyle>`
  display: ${({isVisible}) => isVisible ? "flex" : "none"};
  justify-content: center;
  margin: 5rem 0rem 4rem 0rem;
  & > ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > ul > li {
    margin: 0rem .5rem;
    padding: .2rem .5rem;
    border-radius: .4rem;
    font-size: 1.6rem;
  }

  & > ul > li.active {
    background: ${({theme}) => theme.color.secondary};
    color: ${({theme}) => theme.color.white};
  }
`

export const ArrowIconLeft = styled.img<IPaginationStyle>`
  display: ${({isVisible}) => isVisible ? "flex" : "none"};
  height: 2rem;
  width: 2rem;
  margin-bottom: .15rem;
`

export const ArrowIconRight = styled.img<IPaginationStyle>`
  display: ${({isVisible}) => isVisible ? "flex" : "none"};
  height: 2rem;
  width: 2rem;
  margin-bottom: .15rem;
`
