import styled from "styled-components";
import bannerImg from "../../../assets/images/apartments-hero.png";

interface IHeaderForm {
  banner?:boolean,
  wrapper?:boolean,
} 

export const Div = styled.div<IHeaderForm>`
  position: absolute;
  left: 0;
  top: 0;
  background:url(${bannerImg}); 
  background-size: cover;
  background-repeat:no-repeat;
  width: 100vw;
  height: 58.5rem;
  background-position: center;
  @media ${({theme}) => theme.media.tablet} { 
    background-position-y: 50%;
  }
  & form:first-child {
    padding: 0rem 1rem;
    position: absolute;
    top: 82%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: ${({theme}) => theme.color.white};
    text-align: center;
    @media ${({theme}) => theme.media.tablet} { 
      width: 90%;
    }
    @media ${({theme}) => theme.media.laptop} { 
      width: 50%;
      top: 78%;
    }

    & h1:first-child,
    & h2:nth-child(2)  {
      text-align: left;
    }
    & h1:first-child {
      font-size: 3.4rem;
      @media ${({theme}) => theme.media.laptop} { 
        font-size: 5rem;
      }
    }
    & h2:nth-child(2) {
      font-weight: 400;
      font-size: 2.2rem;
      @media ${({theme}) => theme.media.laptop} { 
        font-size: 2.4rem;
      }
    }
    & select:nth-child(3) {
      width: 100%;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    & select:nth-child(4),
    & select:nth-child(5) {
      width: 49%;
      margin-bottom: 2rem;
    }
    & select:nth-child(4) {
      float: left;
    }
    & select:nth-child(5) {
      float: right;
    }
    & button:last-child {
      @media ${({theme}) => theme.media.laptop} { 
        font-weight: bold;
        font-size: 2.2rem;
      }
    }
  }
    
`