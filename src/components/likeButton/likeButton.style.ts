import styled from "styled-components/macro";
import heartOutline from "../../assets/icon/heart-outline.svg";
import heartFull from "../../assets/icon/heart-full.svg";

interface ILikeButtonStyled {
  isLiked?: boolean;
}

export const LikeButtonStyled = styled.div<ILikeButtonStyled>`
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  background-image: ${({ isLiked }) =>
    isLiked ? `url(${heartFull})` : `url(${heartOutline})`};
  background-repeat: no-repeat;
  background-size: cover;
  opacity: ${({ isLiked }) => (isLiked ? `1` : `0.7`)};
  @media ${({ theme }) => theme.media.laptop} {
    width: 2.2rem;
    height: 2.2rem;
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
