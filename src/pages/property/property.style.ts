import styled  from "styled-components/macro";

interface IStyledSlides {
  bgImage?: string,
}

export const Container = styled.div<IStyledSlides>`
  padding: 1rem 0rem 0rem 0rem;
  @media ${({theme}) => theme.media.laptop} { 
    display: flex;
    & > div:first-child{
      width: 40%
    }
    & > div:nth-child(2){
      width: 60%
    }
    height: 100vh;
    overflow: hidden;
    
  }
`

export const MapContainer = styled.div<IStyledSlides>`
  height: 40rem;
  @media ${({theme}) => theme.media.tablet} { 
    height: 50rem;
  }
  @media ${({theme}) => theme.media.laptop} { 
    height: 100%;
  }
`








