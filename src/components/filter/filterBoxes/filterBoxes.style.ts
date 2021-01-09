import styled from "styled-components/macro";


interface IFilterBoxesStyle {
  active?: boolean,
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 3rem 0rem;
`
export const FilterLabel = styled.p`
  font-size: 1.6rem;
  color: ${({theme}) => theme.color.blackLight};
  font-weight: 500;
  width: 100%;
  margin-bottom: 1.5rem;
`

export const Box = styled.div<IFilterBoxesStyle>`
  font-size: 1.6rem;
  color: ${({theme}) => theme.color.blackLight};
  border: 1.5px solid ${
    ({active,theme}) => active ? theme.color.secondary : theme.color.gray
  };
  background: ${
    ({active,theme}) => active ? theme.color.primary : theme.color.white
  };
  color: ${
    ({active,theme}) => active ? theme.color.white : theme.color.blackLight
  };
  border-radius: .4rem;
  width: 5rem;
  height: 5rem;
  display:flex;
  justify-content: center;
  align-items: center;
`



