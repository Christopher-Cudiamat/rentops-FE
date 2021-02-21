import styled from "styled-components/macro";
import filterIcon from "../../../assets/icon/filter.svg";
import { Button } from "../../../components/ui/button.style";

interface IFilterPropertyStyle {
  scrollable?: boolean,
}

export const ButtonStyled = styled.div`
  font-size: 1.4rem;
  padding: 1rem 1rem 1rem 4rem;
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    background: url(${filterIcon});
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    height: 3rem;
    width: 3rem;
    opacity: 0.7;
    position: absolute;
  }
  @media ${({theme}) => theme.media.laptop} { 
    margin-right: 2rem;
    transition: transform .3s;
    font-size: 1.8rem;
    font-weight: 500;
    &:hover {
      box-shadow: 0 3px 0 0 ${({theme}) => theme.color.primary};
      cursor: pointer;
    }
  }
`

export const FormContainer = styled.form<IFilterPropertyStyle>`
  width: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  background: white;
  padding: 3rem 2rem 8rem 2rem;
  z-index: 9999999;
  font-size: 1.8rem;
  height: 100vh;
  overflow-Y:scroll;
  @media ${({theme}) => theme.media.laptop} { 
    width: 25%;
    height: 100vh;
    overflow-Y:${({scrollable}) => scrollable ? "scroll" : "hidden"};
  }
`

export const FilterButton = styled(Button)`
  border-radius: 0;
  position: fixed;
  bottom: 0%;
  left: 0%;
  width: 100%;
  @media ${({theme}) => theme.media.laptop} { 
    width: 25%;
  }
`
export const ButtonShowAllFilter = styled(Button)`
  font-size: 1.8rem;
  margin: auto;
  display: inline;
  margin-top: 2rem;
  width: 40%;
  height: 4rem;
`
export const ResetFilter = styled.p`
  font-size: 1.8rem;
  margin-bottom: 0rem;
  color: ${({theme}) => theme.color.gray};
`
export const FilterNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`

