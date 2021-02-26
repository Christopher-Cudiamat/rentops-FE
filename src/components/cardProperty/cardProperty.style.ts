import styled  from "styled-components/macro";
import furniture from '../../assets/icon/furniture.svg'
import bed from '../../assets/icon/bed.svg'
import bath from '../../assets/icon/shower.svg'
import Slider from "react-slick";

interface IStyledSlides {
  bgImage?: string,
}

export const SliderStyled = styled(Slider)`
`
export const Container = styled.div`
  @media ${({theme}) => theme.media.tablet} { 
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const CardContainer = styled.div`
  width: 95%;
  border-bottom: 1px solid ${({theme}) => theme.color.grayLight};
  margin: 0rem auto 3rem auto;
  position:relative;
  @media ${({theme}) => theme.media.tablet} { 
    width: 45%;
  }
  @media ${({theme}) => theme.media.laptop} { 
    width: 26%;
    &:hover {
      cursor: pointer;
    }
    
  }
`
export const CardTitle= styled.p`

  background: ${({theme}) => theme.color.secondary};
  padding: .7rem 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({theme}) => theme.color.white};
  margin-bottom: 0rem;
  text-align: center;
  position: absolute;
  width: fit-content;
  position: absolute;
  bottom: 24%;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 2;
`

export const SlidesContainer = styled.div<IStyledSlides>`
  position: relative;
`

export const Slides = styled.div<IStyledSlides>`
  background-image: url(${({bgImage}) => bgImage}); 
  background-repeat:no-repeat;
  width: 100%;
  height: 22rem;
  background-position: center;
  background-size:cover;
`
export const TextNew = styled.div<IStyledSlides>`
  color: ${({theme}) => theme.color.white};
  background: ${({theme}) => theme.color.tertiary}; 
  position: absolute;
  right: -3rem;
  top: .5rem;
  transform: rotate(34deg); 
  font-size: 1.4rem;
  padding:  0rem 4rem;
`


export const CardDetails = styled.div`
  padding: .5rem 1rem 1rem 1rem;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
    margin-top: 1rem;
    & > p {
      color: ${({theme}) => theme.color.blackLight};
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 0rem;
    }
    & > img {
      width: 2rem;
      height: 2rem;
      opacity: 0.4;
    }
  }

  & > div:last-child {
    display: flex;
    & > p {
      color: ${({theme}) => theme.color.blackLight};
      font-size: 1.4rem;
      margin-right: 2rem;
      position:relative;
      padding-left: 2.5rem;
      &:first-child:before {
        background-image: url(${furniture});
      }:nth-child(2):before {
        background-image: url(${bed});
      }
      &:last-child:before {
        background-image: url(${bath});
      }
      &:before {
        content: "";
        background-repeat: no-repeat;
        opacity: 0.4;
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 0rem;
        left: 0rem;   
      }
    }
   
  }
`


