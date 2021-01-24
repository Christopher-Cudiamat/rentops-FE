import styled  from "styled-components/macro";
import { Button } from "../../components/ui/button.style";
import photos from "../../assets/icon/photos.svg"

interface IStyledSlides {
  bgImage?: string,
}

export const ButtonViewPhotos = styled(Button)`
    width: 40%;
    font-size: 1.4rem;
    margin: auto;
    margin-top: -2rem;
    margin-left: 1rem;
    height: 3.5rem;
    padding-left: 3.5rem;
    position: relative;
    &:before {
      content: "";
      background: url(${photos});
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 19%;
      left: 7%;
      height: 2rem;
      width: 2rem;
      opacity: 1;
    }
`

export const ImageBanner = styled.div<IStyledSlides>`
  background-image: url(${({bgImage}) => bgImage}); 
  background-repeat:no-repeat;
  width: 100%;
  height: 22rem;
  background-position: center;
  background-size:cover;
`

export const Container = styled.div<IStyledSlides>`
  padding: 1rem 0rem 3rem 0rem;
`

export const Details = styled.div<IStyledSlides>`
  padding: 1rem 1rem 3rem 1rem;
`



