import styled  from "styled-components/macro";

interface IStyledSlides {
  bgImage?: string,
}

export const Container = styled.div<IStyledSlides>`
  padding: 0rem 0rem 0rem 0rem;
  @media ${({theme}) => theme.media.laptop} { 
    display: flex;
    height: 100vh;
    overflow: hidden;
    & > div:first-child{
      width: 40%
    }

    & > div:nth-child(2){
      width: 60%;
    }  
    
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

export const Wrapper = styled.div`
 
  & > div {
    background-color: ${({theme}) => theme.color.white}; 
    padding-bottom: 7rem;
    padding-top: 7rem;

    @media ${({theme}) => theme.media.tablet} { 
      background-color: ${({theme}) => theme.color.grayLightBlue};
    }
  }
`









