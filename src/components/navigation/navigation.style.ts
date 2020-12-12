import styled from "styled-components";
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
`;

export const ImageLogo = styled.img`
  max-width: 50%;
  @media ${props => props.theme.media.tablet} { 
    width: 30%;
  }
  @media ${props => props.theme.media.laptop} { 
    width: 15%;
    margin-left: 1rem
  }
`