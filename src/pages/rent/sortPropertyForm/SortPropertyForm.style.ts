import styled from "styled-components/macro";
import sortIcon from "../../../assets/icon/sort.svg";
import { Modal } from "../../../components/ui/modal.style";

export const ButtonStyled = styled.div`
  font-size: 1.4rem;
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

export const SortModal = styled(Modal)`
  width: 100vw;
  height: 100vh;
  padding: 5rem 0rem 0rem 0rem;
  & button {
    margin: 0rem 0rem 4rem 2rem;
  }
`

export const SortText = styled.p`
  font-size: 2.5rem;
  border-bottom: 1px solid #888;
  margin-bottom: 3rem;
  padding: 0rem 2rem;
`