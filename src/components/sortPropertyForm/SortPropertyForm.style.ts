import styled from "styled-components/macro";
import sortIcon from "../../assets/icon/sort.svg";

export const ButtonStyled = styled.div`
  font-size: 1.4rem;
  border: solid .1rem ${({theme}) => theme.color.grayLight};
  padding: 1rem 1rem 1rem 3.5rem;
  display: inline-block;
  position: relative;
  border-radius: .4rem;
  &:after {
    content: "";
    background: url(${sortIcon});
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    height: 1.8rem;
    width: 3rem;
    opacity: 0.7;
    position: absolute;
  }

`