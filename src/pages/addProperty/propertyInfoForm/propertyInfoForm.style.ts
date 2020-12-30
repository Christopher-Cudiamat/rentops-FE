import styled from "styled-components/macro";


export const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;

  & > div {
    width: 20%;
  }
  & > div:first-child {
    width: 50%;
  }
`
