import styled, {css}  from "styled-components";

interface ICarousel {
  imageWrapper?: boolean,
  underlay?: boolean,
  container?: boolean,
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

