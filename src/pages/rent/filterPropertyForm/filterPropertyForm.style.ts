import styled from "styled-components/macro";
import filterIcon from "../../../assets/icon/filter.svg";
import { Button } from "../../../components/ui/button.style";

export const ButtonStyled = styled.div`
  font-size: 1.4rem;
  /* border: solid .1rem ${({theme}) => theme.color.grayLight}; */
  padding: 1rem 1rem 1rem 4rem;
  display: inline-block;
  position: relative;
  border-radius: .4rem;
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
`

export const FormContainer = styled.form`
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
`

export const FilterButton = styled(Button)`
  border-radius: 0;
  position: fixed;
  bottom: 0%;
  left: 0%;
  width:100%;
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

