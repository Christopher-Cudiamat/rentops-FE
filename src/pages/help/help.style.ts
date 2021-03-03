import styled  from "styled-components/macro";

export const Container = styled.div`
  padding-bottom: 7rem;
  margin: auto;
  position: relative;
  @media ${props => props.theme.media.tablet} { 
    width: 90%;
    padding-left: 0rem;
  }

`

export const ImageBannerContainer = styled.div`
  margin: auto;
  text-align: center;
`

export const ImageBanner = styled.img`
  width: 100%;
  @media ${props => props.theme.media.tablet} { 
    width: 90%;
  }
  @media ${props => props.theme.media.laptop} { 
    width: 50%;
  }
`

export const DivFaqs = styled.div`
  @media ${props => props.theme.media.laptop} { 
    text-align: center;
    margin: auto;
  }
`

export const DivContent = styled.div`
  padding: 2rem;
  background: ${({theme}) => theme.color.grayLightBlue};
  @media ${props => props.theme.media.laptop} { 
    width: 60%;
    padding: 3rem;
    margin: auto;
  }
`

export const DivContact = styled.div`
  text-align: center;
  margin: auto;
  width: 90%;
  margin-top: 5rem;

`


