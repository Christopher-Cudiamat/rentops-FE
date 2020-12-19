import styled, {css}  from "styled-components";

interface ICarousel {
  imageWrapper?: boolean,
  underlay?: boolean,
  container?: boolean,
  carouselContainer?: boolean,
}


export const Div = styled.div<ICarousel>`
  & img {
    transition: all .5s;
    cursor: pointer;
  }
  & img:hover {
    opacity: 0.6;
    transform: scale(1.2);
  }


  ${({carouselContainer}) => carouselContainer &&
    css`
    margin-top: 63rem;
    & p {
      text-align: center;
    }
    `
  };

  ${({imageWrapper}) => imageWrapper &&
    css`
    position: relative;
    overflow: hidden;
    `
  };

  ${({container}) => container &&
    css`
    width 30px;
    `
  };
  
`

export const P = styled.p<ICarousel>`
  font-size: 2rem;
  position: absolute;
  left: 0%;
  bottom: 0%;
  z-index: 999;
  background: rgba(0,0,0,0.6);
  color: white;
  margin-bottom: 0rem;
  padding: 1rem 6rem 1rem 1.5rem;
  clip-path: polygon(0 0, 71% 0, 100% 100%, 0% 100%);
`



