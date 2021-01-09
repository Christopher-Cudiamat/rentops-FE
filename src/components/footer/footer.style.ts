import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  background: ${({theme}) => theme.color.primary};
  padding: 5rem 0rem 0rem 0rem;
  text-align:center;

  & ul li {
    margin: 3rem 0rem;
  }
`

export const FooterLinksContainer = styled.ul`
  color: ${({theme}) => theme.color.white};
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0rem 2rem;
  @media ${({theme}) => theme.media.laptop} { 
    display: flex;
    justify-content: center;
  }
`

export const FooterLink = styled.li`
  margin: 5rem 0rem;

  @media ${({theme}) => theme.media.laptop} { 
    padding: 0rem 2rem;
  }

  &:hover {
    opacity: 0.8;
  }
`

export const FooterSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0rem 2rem;
`

export const FooterSocialIcon = styled.img`
  width: 2rem;
  margin: 3rem 1.5rem;
  
  @media ${({theme}) => theme.media.laptop} { 
    margin-bottom: 6rem;
    width: 3rem;
  }

  &:hover {
    opacity: 0.8;
    cursor:pointer;
  }
`

export const FooterLower = styled.div`
  background: ${({theme}) => theme.color.secondary};
  padding: 2rem;
`
export const FooterLowerText = styled.p`
  color: ${({theme}) => theme.color.white};
  margin: .5rem 0rem;
  font-size: 1.2rem;
`
