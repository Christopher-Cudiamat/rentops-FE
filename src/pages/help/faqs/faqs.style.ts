import styled  from "styled-components/macro";


export const DivFaqs = styled.div`
  margin-bottom: 8rem;
  @media ${props => props.theme.media.laptop} { 
    text-align: center;
    margin: auto;
    margin-bottom: 8rem;
  }
`