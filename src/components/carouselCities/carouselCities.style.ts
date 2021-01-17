import styled, {css}  from "styled-components/macro";

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
  background: rgba(24,131,191,0.8);
  color: ${({theme}) => theme.color.white};
  font-weight: bold;
  margin-bottom: -2px;
  padding: .5rem 6rem .5rem 1.5rem;
  clip-path: polygon(0 0, 71% 0, 100% 100%, 0% 100%);
`



