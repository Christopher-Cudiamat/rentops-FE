import styled from "styled-components/macro";
import SVG from "react-inlinesvg";

export const Div = styled.div`

`

export const IconMenu = styled(SVG)`
  width: 3rem;
  height: 3rem;
  margin-top: .8rem;
  & path {
    fill: ${props => props.theme.color.white};
    &:hover {
      fill: ${props => props.theme.color.primary};
      cursor: pointer;
    }
  }
  @media ${props => props.theme.media.laptop} { 
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const IconSearch = styled(SVG)`
  width: 3rem;
  height: 3rem;
  margin-top: .8rem;
  & path {
    fill: ${props => props.theme.color.white};
    &:hover {
      fill: ${props => props.theme.color.primary};
      cursor: pointer;
    }
  }
  @media ${props => props.theme.media.laptop} { 
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const ImageLogo = styled.img`
  max-width: 50%;
  @media ${props => props.theme.media.tablet} { 
    width: 30%;
  }
  @media ${props => props.theme.media.laptop} { 
    width: 18%;
    margin-left: 1rem;
    margin-top: 1rem;
  }
`