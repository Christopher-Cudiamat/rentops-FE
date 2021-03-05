import styled  from "styled-components/macro";
import photos from "../../../assets/icon/photos.svg"
import videos from "../../../assets/icon/video.svg"
import { Button } from "../../../components/ui/button.style";

interface IPropertyDetailsStyle {
  bgImage?: string,
}

export const Wrapper = styled.div`
   width: 100%;
   overflow-y: scroll;
`

export const MediaButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ButtonViewPhotos = styled(Button)`
    width: 40%;
    font-size: 1.4rem;
    margin-top: -2rem;
    margin-right: .5rem;
    height: 3.5rem;
    padding-left: 3.5rem;
    position: relative;
    @media ${({theme}) => theme.media.tablet} { 
      width: 17rem;
    }
    &:before {
      content: "";
      background: url(${photos});
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 50%;
      left: 20%;
      transform: translate(-50%, -50%);
      height: 2rem;
      width: 2rem;
      opacity: 1;
    }
`

export const ButtonViewVideos = styled(Button)`
    width: 40%;
    font-size: 1.4rem;
    margin-top: -2rem;
    margin-left: .5rem;
    height: 3.5rem;
    padding-left: 3.5rem;
    position: relative;
    @media ${({theme}) => theme.media.tablet} { 
      width: 17rem;
    }
    &:before {
      content: "";
      background: url(${videos});
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 50%;
      left: 20%;
      transform: translate(-50%, -50%);
      height: 2rem;
      width: 2rem;
      opacity: 1;
    }
`

export const ImageBanner = styled.div<IPropertyDetailsStyle>`
  background-image: url(${({bgImage}) => bgImage}); 
  background-repeat:no-repeat;
  width: 100%;
  height: 22rem;
  background-position: center;
  background-size:cover;
`

export const Details = styled.div<IPropertyDetailsStyle>`
  padding: 2rem 1rem 3rem 1rem;
  @media ${({theme}) => theme.media.tablet} { 
    padding: 3rem 2rem 3rem 2rem;
  }
  @media ${({theme}) => theme.media.laptop} { 
    padding: 3rem 3rem 30rem 3rem;
    font-size: 1.6rem;
    height: 100%;
  }
  & span {
    color: ${({theme}) => theme.color.blackLight};
  }
`

export const DivDescription = styled.div<IPropertyDetailsStyle>`
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid #ccc;
  margin-bottom: 2rem;
`







