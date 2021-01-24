import styled  from "styled-components/macro";
import { Modal } from "../ui/modal.style";



export const LoaderUnderlay = styled(Modal)`
  height: 100vh;
  width: 100vw;
  opacity: 0.7;
  background: ${({theme}) => theme.color.white};
`



