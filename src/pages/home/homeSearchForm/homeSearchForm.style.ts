import styled from "styled-components/macro";

interface IHeaderForm {
  banner?:boolean,
  wrapper?:boolean,
} 

export const Container = styled.div<IHeaderForm>`
  text-align: center;
  padding: 3rem 0rem 5rem 0rem;
  @media ${({theme}) => theme.media.laptop} { 
    display: inline-block;
    width: 40%;
    margin-top: 8rem;
    text-align: left;
  }
  & > p:first-child {
    margin: 0rem 0rem 1rem 0rem;
  }
  & > div {
    text-align: left;
    margin-top: -1px;
  }
 
  & label {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({theme}) => theme.color.blackLight};
    text-transform: uppercase;
  }
`;

export const MainContainer = styled.div<IHeaderForm>`
  @media ${({theme}) => theme.media.laptop} { 
    display: flex;
    justify-content: space-evenly;
  }
`;
export const HeroImageDesktop = styled.img<IHeaderForm>`
  display: none;

  @media ${({theme}) => theme.media.laptop} { 
    display: inline-block;
    width: 42%;
  }
`;

export const HeroImageMobile = styled.img<IHeaderForm>`
  width: 100%;
  height: auto;
  @media ${({theme}) => theme.media.tablet} { 
    width: 80%;
  }
  @media ${({theme}) => theme.media.laptop} { 
    display: none;
  }
`;

export const SearchInputContainer = styled.div<IHeaderForm>`
  padding: 3rem 2rem 3rem 2rem;
  position: relative;
  width: 95%;
  margin: auto;
  border-radius: .5rem;
  background: rgb(255,255,255);
  background: rgb(255,255,255);
  background: linear-gradient(137deg, rgba(255,255,255,1) 0%, rgba(24,131,191,1) 0%, rgba(77,173,227,1) 50%);
  @media ${({theme}) => theme.media.laptop} { 
    width: 100%;
  }
`;

export const SearchInput = styled.div<IHeaderForm>`
  background: ${({theme}) => theme.color.white};
  color: ${({theme}) => theme.color.blackLight};
  font-size: 1.8rem;
  height: 5rem;
  border-radius: .5rem;
  padding-top: 0rem;
  padding-left: 1.7rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;


export const SearchIcon = styled.img<IHeaderForm>`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translate(-50%, -50%);
  border-bottom-right-radius: .5rem;
  border-top-right-radius: .5rem;
`;
