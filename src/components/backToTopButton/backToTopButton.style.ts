import styled  from "styled-components/macro";
import goToTop from '../../assets/icon/go-to-top.svg';

interface IBackToTopButtonStyle {
  isVisible?: boolean,
}

export const BackToTopButtonStyle = styled.div<IBackToTopButtonStyle>`
  width: 4rem;
  height: 4rem; 
  position: fixed;
  bottom: 10%;
  right: 2%;
  display: ${({isVisible}) => isVisible ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  background-image: url(${goToTop});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1; 
  @media ${({theme}) => theme.media.laptop} { 
    &:hover {
      cursor: pointer;
    }
  }
`




